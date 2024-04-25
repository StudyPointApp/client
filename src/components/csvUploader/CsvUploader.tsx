import React, { useState, ChangeEvent } from 'react';

type JsonClassObject = {
    Classname: string;
    Teacher: string;
    Week: string;
    ActivityName: string;
    ActivityType: string;
    ActivityDetails: string;
    DueDate: string;
    StudyPoints: string;
    Student: string;
    Group: string;
};

const CsvToJsonConverter: React.FC = () => {
  const [csvData, setCsvData] = useState<string | null>(null);
  const [jsonData, setJsonData] = useState<{} | null>(null);
  // const [newJsonData, setNewJsonData] = useState<{} | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target || !e.target.result) return;
      const content = e.target.result as string;
      setCsvData(content);
    };

    reader.readAsText(file);
  };

  const convertCsvToJson = () => {
    if (!csvData) return;

    const lines = csvData.split('\r\n');
    const headers = lines[0].split(',');
    const result: any[] = [];

    for (let i = 1; i < lines.length; i++) {
      const obj: { [key: string]: string } = {};
      const currentLine = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }

      result.push(obj);
    }
    const restructuredData = restructureData(result);

    console.log('JSON data:', result);
    console.log('JSON changed to single object',restructuredData);
    setJsonData(restructuredData);
    // SEND TO SERVER FROM HERE
  };

  const restructureData = (jsonArray: JsonClassObject[]):{} => {
    // restructure from array of objects representing csv rows to object with lists representing entities: class, teachers, activities, students
    const CLASS_NAME = 'Classname';
    const TEACHER = 'Teacher';
    const WEEK = 'Week';
    const ACTIVITYNAME = 'ActivityName';
    const ACTIVITYTYPE = 'ActivityType';
    const ACTIVITYDESTAILS = 'ActivityDetails';
    const DUEDATE = 'DueDate';
    const STUDYPOINTS = 'StudyPoints';
    const STUDENT = 'Student';
    const GROUP = 'Group';

    const sampleObject = {
        [CLASS_NAME]: '',
        teachers: [],
        activities: [],
        students: [],
    } as {[key:string]:any};

    for(const jsonObject of jsonArray){
        if(jsonObject[CLASS_NAME]) sampleObject[CLASS_NAME] = jsonObject[CLASS_NAME];
        if(jsonObject[TEACHER]) sampleObject.teachers.push(jsonObject[TEACHER]);
        if(jsonObject[ACTIVITYNAME]) {   

            sampleObject.activities.push({
                [ACTIVITYNAME]: jsonObject[ACTIVITYNAME]
                ,[ACTIVITYTYPE]: jsonObject[ACTIVITYTYPE]
                ,[ACTIVITYDESTAILS]: jsonObject[ACTIVITYDESTAILS]
                ,[DUEDATE]: jsonObject[DUEDATE]
                ,[STUDYPOINTS]: jsonObject[STUDYPOINTS]
                ,[WEEK]: jsonObject[WEEK]
            });
        }
        console.log(jsonObject[GROUP]);
        if(jsonObject[STUDENT]) sampleObject.students.push({[STUDENT]:jsonObject[STUDENT], [GROUP]:jsonObject[GROUP]});
    }
    return sampleObject;
  }



  return (
    <div>
      <h2>CSV to JSON Converter</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <button onClick={convertCsvToJson}>Convert</button>

      {jsonData && (
        <div>
          <h2>You have succesfully uploaded your csv file!</h2>
          <hr />
        </div>
      )}
    </div>
  );
};

export default CsvToJsonConverter;

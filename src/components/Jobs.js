import React from "react";
import { useEffect, useState } from "react";

function Jobs(props) {
  const [jobList, setJobList] = useState([{ job: "", type: 0 }]);
  return (
    <>
      <div className="kutu">
        {/* {props.isler.length > 1 &&
          props.isler.map((object) => {
            var typeName = "obje-normal";
            if (props.type == 1) {
              typeName = "obje-critical";
            } else if (props.type == 2) {
              typeName = "obje-important";
            } else if (props.type == 3) {
              typeName = "obje-routine";
            }
              return <p className={typeName}>{object.job}</p>
          })} */}
        {jobList.length > 1 &&
          jobList.map((object) => {
            var typeName = "obje-normal";
            if (object.type == 1) {
              typeName = "obje-critical";
            } else if (object.type == 2) {
              typeName = "obje-important";
            } else if (object.type == 3) {
              typeName = "obje-routine";
            }
            return <p className={typeName}>{object.job}</p>;
          })}
      </div>
    </>
  );
}

export default Jobs;

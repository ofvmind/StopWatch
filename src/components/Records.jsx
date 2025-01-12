import { useEffect, useRef } from "react";

export const Records = ({ records, setRecords }) => {
  const recordsRef = useRef(null);

  useEffect(() => {
    recordsRef.current?.lastChild?.scrollIntoView({ behavior: "smooth" });
  }, [records]);

  return (
    <>
      {records.length ?
        <div ref={recordsRef} className="records center-column">
            {records.map((record, index) =>
              <div ref={recordsRef} key={record.miliSeconds} className="record">
                {index + 1}.
                &nbsp;
                <p>{String(record.hours).padStart(2, '0')}</p>
                <span>:</span>
                <p>{String(record.minutes).padStart(2, '0')}</p>
                <span>:</span>
                <p>{String(record.seconds).padStart(2, '0')}</p>
                <span>:</span>
                <p>{String(record.miliSeconds).padStart(2, '0')}</p>
              </div>
            )}
        </div>
        : null
      }
      {records.length ? <button onClick={() => setRecords([])} className="record-btn">Clear Records</button> : null}
    </>
  );
};
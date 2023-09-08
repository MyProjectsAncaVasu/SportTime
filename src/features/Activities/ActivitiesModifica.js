import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPen } from '@fortawesome/free-solid-svg-icons';

export function ActivitiesModifica() {
  const [values, setValues] = useState({
    day: '',
    morningActivity: '',
    morningStart: '',
    morningEnd: '',
    eveningActivity: '',
    eveningStart: '',
    eveningEnd: '',
  });

  // const { activityId } = useParams();

  useEffect(() => {
    fetch('http://localhost:3005/api/schedules/38', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setValues(data);
        console.log(data);
      });
  }, []);

  if (!values) {
    return <strong>Loading...</strong>;
  }

  function handleInputChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch('http://localhost:3005/api/schedules/38', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('The activity was updated successfully');
        console.log(data);
      });
  }

  return (
    <>
      <button className=" rounded bg-gray-200 text-center text-xl font-bold  border-6 mt-10 ml-40 mr-40">
        <FontAwesomeIcon icon={faBackward} />
        <NavLink to="/activities">Go Back</NavLink>
      </button>
      <h1 className="text-3xl font-bold mt-10 ml-96  text-black">
        Day:
        {values.day}
      </h1>
      <div
        style={{
          boxShadow: '5px 10px 18px #8D8DAA',
          backgroundColor: '#EDEEF7',
          marginTop: 4,
          marginLeft: 140,
          width: 1000,
          height: 200,
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="text-l ml-20 mt-10 font-bold mr-20">
            <p className="  mt-10 ">
              <label>morningActivity:</label>
              <input
                className="  text-center text-blue-600 rounded"
                type="text"
                name="morningActivity"
                value={values.morningActivity}
                onChange={handleInputChange}
              ></input>
            </p>
            <p className="   mt-2 ">
              <label htmlFor=""> morningStart:</label>
              <input
                className="  text-center text-blue-600 rounded"
                name="morningStart"
                value={values.morningStart}
                onChange={handleInputChange}
              ></input>
            </p>
            <p className=" mt-2 ">
              morningEnd:{' '}
              <input
                className="  text-center text-blue-600 rounded"
                type="text"
                name="morningEnd"
                value={values.morningEnd}
                onChange={handleInputChange}
              ></input>
            </p>

            <p className=" mt-4 border-gray-500 border-y-2  border-b-0  ">
              eveningActivity:{' '}
              <input
                className="  text-center text-blue-600 rounded"
                type="text"
                name=" eveningActivity"
                value={values.eveningActivity}
                onChange={handleInputChange}
              ></input>
            </p>

            <p className=" mt-2 ">
              eveningStart:{' '}
              <input
                className="  text-center text-blue-600 rounded"
                type="text"
                name=" eveningStart"
                value={values.eveningStart}
                onChange={handleInputChange}
              ></input>
            </p>

            <p className=" mt-2 ">
              eveningEnd:
              <input
                className="  text-center text-blue-600 rounded"
                type="text"
                name=" eveningStart"
                value={values.eveningEnd}
                onChange={(e) => {
                  values.eveningEnd = e.target.value;
                }}
              ></input>
            </p>
          </div>
          <div>
            <button
              className="rounded  bg-teal-100 text-black font-semibold px-2 py-1 text-center float-left mt-10 ml-20 cursor-pointer"
              onClick={handleSubmit}
            >
              Edit Activity <FontAwesomeIcon icon={faPen} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

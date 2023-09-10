import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faBackward } from '@fortawesome/free-solid-svg-icons';

export function ActivitiesDelete() {
  const { activityId } = useParams();
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3005/api/schedules/' + activityId)
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        console.log(data);
      });
  }, [activityId]);

  if (!activities) {
    return <strong>Loading...</strong>;
  }

  async function handleDelete() {
    const text = window.confirm(
      `Are you sure you want to delete the activity "${activities.day}"?`
    );
    if (!text) {
      return;
    }

    await fetch('http://localhost:3005/api/schedules/' + activities.id, {
      method: 'DELETE',
      headers: {},
      body: JSON.stringify(activities),
    })
      .then((res) => res.json())
      .then(() => alert('Successfully deleted'));
  }

  return (
    <>
      <button className=" rounded bg-gray-200 text-center text-xl font-bold  border-6 mt-10 ml-40 mr-40">
        <FontAwesomeIcon icon={faBackward} />
        <NavLink to="/activities">Go Back</NavLink>
      </button>
      <h1 className="text-3xl font-bold mt-10 ml-96  text-black">
        Day:
        {activities.day}
      </h1>
      <div className="mt-4 ml-36 mr-72 h-52 rounded-xl bg-[rgb(237,238,247)]  shadow-[5px_10px_18px]">
        <ul className="text-l ml-20 mt-10 font-bold mr-20">
          <li className="grid grid-cols-5 mt-12 ">
            morningActivity:
            <span className=" text-center text-blue-600">
              {activities.morningActivity}
            </span>
          </li>
          <li className="grid grid-cols-5 mt-2 ">
            morningStart:
            <span className=" text-center text-blue-600">
              {activities.morningStart}
            </span>
          </li>
          <li className="grid grid-cols-5 mt-2 ">
            morningEnd:{' '}
            <span className=" text-center text-blue-600">
              {activities.morningEnd}
            </span>
          </li>

          <li className="grid grid-cols-5 mt-4 border-gray-500 border-y-2  border-b-0  ">
            eveningActivity:{' '}
            <span className=" text-center text-blue-600">
              {activities.eveningActivity}
            </span>
          </li>

          <li className="grid grid-cols-5 mt-2 ">
            eveningStart:{' '}
            <span className=" text-center text-blue-600">
              {activities.eveningStart}
            </span>
          </li>

          <li className="grid grid-cols-5 mt-2 ">
            eveningEnd:
            <span className=" text-center text-blue-600">
              {' '}
              {activities.eveningEnd}
            </span>
          </li>
        </ul>

        <div>
          <button
            className="rounded  bg-teal-100 text-black font-semibold px-2 py-1 text-center float-right mt-10 mr-20 cursor-pointer"
            onClick={handleDelete}
          >
            Delete Activity <FontAwesomeIcon icon={faCircleMinus} />
          </button>
        </div>
      </div>
    </>
  );
}

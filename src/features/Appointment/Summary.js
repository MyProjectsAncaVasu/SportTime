import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function Summary() {
  const location = useLocation();
  const {
    day,
    morningActivity,
    morningStart,
    morningEnd,
    eveningActivity,
    eveningStart,
    eveningEnd,
  } = location.state;

  console.log(day, morningActivity);

  return (
    <>
      <div>
        <button className=" rounded bg-gray-200 text-center text-xl font-bold  border-6 mt-10 ml-40 mr-40">
          <FontAwesomeIcon icon={faBackward} />
          <NavLink to="/appointment/Schedule">Go Back</NavLink>
        </button>

        <table className=" ml-40 mt-6  mr-40 text-center border-black-500 border-4 grid ">
          <thead>
            <tr className="  grid  grid-cols-4">
              <th className="  text-center ">Weekday</th>
              <th className=" text-center">Activity</th>
              <th className=" text-center">Start Time</th>
              <th className=" text-center">End Time</th>
            </tr>
          </thead>

          <tbody>
            <tr className=" ml-0 mr-0 grid grid-cols-4 text-center border-2">
              <td className="  bg-teal-100 ">{day}</td>
              <td className="  bg-teal-100 ">{morningActivity}</td>
              <td className="  bg-teal-100 ">{morningStart}</td>
              <td className="  bg-teal-100 ">{morningEnd}</td>
              <td className="  bg-pink-100 ">{day}</td>
              <td className="  bg-pink-100 ">{eveningActivity}</td>
              <td className="  bg-pink-100 ">{eveningStart}</td>
              <td className="  bg-pink-100 ">{eveningEnd}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

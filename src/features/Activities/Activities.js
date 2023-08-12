import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export function Activities() {
  const [tableValues, setTableValues] = useState(['']);

  // // tableValues - trebuie sa fie array */

  useEffect(() => {
    fetch('http://localhost:3005/schedules?limit=100')
      .then((res) => res.json())
      .then((data) => {
        setTableValues(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (index) => {
    const cells = [...tableValues];
    cells.splice(index, 1);
    setTableValues(cells);

    // const newItems = tableValues.filter(
    //   (tableValue) => tableValue.id !== index
    // );
    // setTableValues(newItems);
  };

  const addItem = (row) => {
    // const newItem = {
    //   id: tableValues.length + 1,
    // };
    tableValues.push(row);
    setTableValues([...tableValues]);
  };

  // iterate through the tableValues array and render a unique tableValue component for each tableValue object in the array

  const rows = tableValues.map((row, id) => {
    return (
      <tr
        key={id}
        className=" ml-0 mr-0 grid grid-cols-7 text-center border-2 border-black"
      >
        <td className="  bg-teal-100 ">{id + 1}</td>
        <td className="  bg-teal-100  ">{row.day}</td>
        <td className="  bg-teal-100 ">{row.morningActivity}</td>
        <td className="  bg-teal-100 ">{row.morningStart}</td>
        <td className="  bg-teal-100 ">{row.morningEnd}</td>
        <td>
          {' '}
          <button
            className="btn btn-outline-danger"
            onClick={() => handleDelete(id)}
          >
            DELETE
          </button>
        </td>

        <td>
          {' '}
          <button
            className="btn btn-outline-danger"
            onClick={() => addItem(id)}
          >
            Add Item
          </button>
        </td>
        <td className="  bg-pink-100  ">{id + 1}</td>
        <td className="  bg-pink-100 ">{row.day}</td>
        <td className="  bg-pink-100 ">{row.eveningActivity}</td>
        <td className="  bg-pink-100 ">{row.eveningStart}</td>
        <td className="  bg-pink-100 ">{row.eveningEnd}</td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <button className=" rounded bg-gray-200 text-center text-xl font-bold  border-6 mt-10 ml-40 mr-40">
          <FontAwesomeIcon icon={faBackward} />
          <NavLink to="/appointment/Schedule">Go Back</NavLink>
        </button>

        <table className=" ml-40 mt-6  mr-40 text-center border-red-500 border-4 grid ">
          <thead>
            <tr className="  grid  grid-cols-7">
              <th className="  text-center ">Id</th>
              <th className="  text-center ">Weekday</th>
              <th className=" text-center">Activity</th>
              <th className=" text-center">Start Time</th>
              <th className=" text-center">End Time</th>
              <th className=" text-center">Delete</th>
              <th className=" text-center">Add Item</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  );
}

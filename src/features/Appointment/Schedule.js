import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export function Schedule() {
  const [formValues, setFormValues] = useState({
    day: '',
    morningActivity: '',
    morningStart: '',
    morningEnd: '',
    eveningActivity: '',
    eveningStart: '',
    eveningEnd: '',
  });

  const [isActive, setIsActive] = useState(false);

  function handleInput(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    alert('You have added successfully.');
    console.log(formValues);

    const data = await fetch('http://localhost:3005/schedules', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...formValues }),
    }).then((res) => res.json());
    console.log(data);
  }

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const listDays = days.map((day) => (
    <li
      key={day}
      style={{ color: isActive ? 'blue' : 'black' }}
      onClick={() => {
        setFormValues({ day }); // daca nu pun day intre {}apare ziua scrisa pe litere
        setIsActive(true);
      }}
    >
      {day}
    </li>
  ));

  const Welcome = ({ children, isActive }) => {
    return (
      <section className="welcome">
        {isActive ? (
          <h3 className="text-red-800">{children}</h3>
        ) : (
          <p className=" mt-5 ml-5 mr-5 mb-5 text-blue-800 text-xl text-center">
            Choose a weekday!
          </p>
        )}
      </section>
    );
  };

  if (!formValues) {
    return <strong>Loading ...</strong>;
  }

  return (
    <>
      <div className=" mt-5 ml-5 mr-5  h-auto  border-4">
        <div
          style={{
            background: 'linear-gradient(to bottom , #EDEEF7, blue)',
            height: 80,
            marginTop: 0,
            marginLeft: 35,
            marginRight: 35,
          }}
        >
          <h2 className=" mt-5 text-6xl font-bold text-center  ">
            Fitness weekly schedule
          </h2>
        </div>
        <div>
          <ul className="ml-10 mt-10 mb-12 grid grid-cols-8 font-bold text-center text-l">
            {listDays}
            <button type="submit">
              <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
              <Link to="/activities">Summary</Link>
            </button>
          </ul>
        </div>
        <div className="  ml-10 mr-10 h-100 grid grid-cols-1 ">
          <Welcome isActive={formValues !== 0}>
            <form onSubmit={handleSubmit}>
              <fieldset className=" rounded mb-4 ml-10 mr-10  grid grid-cols-1 border-2 ">
                <h6 className=" mt-4 ml-10 text-xl font-bold float-left  ">
                  Morning
                </h6>
                <div className=" ml-10 mb-3 mt-4  ">
                  <label> Activity: </label>
                  <select
                    name="morningActivity"
                    id="morningActivity"
                    className=" ml-1 border-2 "
                    value={formValues.morningActivity}
                    onChange={handleInput}
                  >
                    <option value="">choose</option>
                    <option value="Jogging">Jogging</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Aerobic">Aerobic</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Swimming">Swimming</option>
                  </select>
                </div>
                <div className=" ml-10 mb-6 grid grid-cols-6 ">
                  <p>
                    <label htmlFor="morningStart"> Start:</label>
                    <input
                      type="time"
                      name="morningStart"
                      id="morningStart"
                      className="border-black-700 ml-2 border-2"
                      value={formValues.morningStart}
                      onChange={handleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor="morningEnd"> End:</label>
                    <input
                      type="time"
                      name="morningEnd"
                      id="morningEnd"
                      className="border-rounded border-black-700 border-2 ml-2 "
                      value={formValues.morningEnd}
                      onChange={handleInput}
                    />
                  </p>
                </div>
              </fieldset>
              <fieldset className=" rounded mb-4 ml-10 mr-10   grid grid-cols-1 border-2 ">
                <h6 className=" mt-4 ml-10 text-xl font-bold float-left  ">
                  Evening
                </h6>
                <div className=" ml-10 mb-3 mt-4 ">
                  <label> Activity:</label>
                  <select
                    name="eveningActivity"
                    className=" ml-1 border-2 "
                    value={formValues.eveningActivity}
                    onChange={handleInput}
                  >
                    <option value="">choose</option>
                    <option value="Jogging">Jogging</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Aerobic">Aerobic</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Swimming">Swimming</option>
                  </select>
                </div>
                <div className=" ml-10 mb-6 grid grid-cols-6 ">
                  <p>
                    <label htmlFor="eveningStart"> Start:</label>
                    <input
                      type="time"
                      className="border-black-700 ml-2 border-2"
                      name="eveningStart"
                      id="eveningStart"
                      value={formValues.eveningStart}
                      onChange={handleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor=""> End:</label>
                    <input
                      type="time"
                      name="eveningEnd"
                      id="eveningEnd"
                      className="border-rounded border-black-700 border-2 ml-2 "
                      value={formValues.eveningEnd}
                      onChange={handleInput}
                    />
                  </p>
                </div>
              </fieldset>

              <Link
                to="/appointment/summary"
                state={formValues}
                className="rounded  bg-teal-100 text-black  text-xl border-8 mb-4 font-semibold float-right"
              >
                Register
              </Link>

              <button
                type="submit"
                className="rounded  bg-teal-100 text-black  text-xl border-8 mb-4 font-semibold ml-40"
              >
                Add activity
              </button>
            </form>
          </Welcome>
        </div>
      </div>
    </>
  );
}

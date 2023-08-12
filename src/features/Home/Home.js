import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <>
      <div>
        <div>
          <ul className=" list-disc inline-flex space-x-5  font-bold mr-40 float-right">
            <li className="  underline">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="  underline">
              <NavLink to="/home">Home</NavLink>
            </li>
          </ul>
        </div>
        <div className="  ml-4 mt-8 mr-4 grid grid-cols-3">
          <img
            style={{
              height: 250,
              width: '100%',
              marginRight: 4,
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA41ZNREqn3h0HC5Ohvek8_pLcyh5qFtWMw&usqp=CAU"
            alt=""
          />

          <img
            style={{
              height: 250,
              width: 400,
              marginLeft: 40,
              animationName: 'pulse',
              animationDuration: '2s',
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0mxc2NM6W8VY1KWNMTThuDeEnC71C4BImA&usqp=CAU"
            alt=""
          />

          {/* <p className="mt-4 ml-40">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A corrupti
            quos molestias? Necessitatibus, modi qui eaque, ipsam mollitia
            veniam doloremque laborum, nesciunt rerum quas cumque eligendi
            accusantium possimus ducimus eius?
          </p> */}
        </div>
        <div className="grid grid-cols-2  ml-2">
          <img
            style={{
              height: '100%',
              width: '100%',
              marginLeft: 40,
              marginRight: 4,
              marginTop: 2,
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtg5njMgaoueSuOhYvKTz9R8tj7Lz4CiKY9Q&usqp=CAU"
            alt=""
          />
          <img
            style={{
              height: 400,
              width: '100%',
              marginTop: 2,
              marginLeft: 12,
            }}
            src="https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

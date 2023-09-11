import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export function Home() {
  return (
    <>
      <div>
        <div>
          <ul className=" list-disc md:flex space-x-8  font-bold mr-20 float-right">
            <li className="  underline">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="  underline">
              <NavLink to="/home">Home</NavLink>
            </li>
          </ul>
        </div>
        <div className="  ml-2 mt-2 mr-4 grid grid-cols-3">
          <img
            className="w-96 h-60 ml-16 animate-[ping_2s]"
            src="data:image/png;base64,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"
            alt=""
          />

          <img
            className="w-96 md:h-60 ml-16 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZ8roRujypzRVuzMPwV_8Nh_2jfTsA-eEGg&usqp=CAU"
            alt=""
          />
          <p
            className={clsx(
              ' ml-40 mt-14 font-serif font-bold text-right text-2xl  italic [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-blue-700'
            )}
          >
            The time to relax is when you don't have time for it.
            <p>(Sydney J. Harris)</p>
          </p>
        </div>
        <div className="grid grid-cols-2  ml-2">
          <img
            className="w-auto h-auto  "
            src="https://ro.graffithotel.com/media/image_slide/images/0b676a985d182a65030be69e0bf9b931d680fa00.jpg"
            alt=""
          />
          <img
            className="w-auto h-auto  "
            src="https://en.graffithotel.com/media/image_card/images/2b53b63166a89f9e028f481e674d37595f5c95b1.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

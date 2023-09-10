export function About() {
  return (
    <>
      <div className="  grid  grid-cols-2 ">
        <div className="  ml-2  mt-4  ">
          <img
            className="  md:w-full md:h-96"
            src="https://st.depositphotos.com/1008939/3025/i/450/depositphotos_30252889-stock-photo-start.jpg"
            alt=""
          />
          <img
            className="  md:w-full md:h-96"
            src="https://st3.depositphotos.com/3591429/12952/i/450/depositphotos_129525278-stock-photo-man-skateboarder-and-extreme-sport.jpg"
            alt=""
          />
        </div>

        <div className="  mt-4 mr-2 bg-orange-200 ">
          <h3 className="text-center mt-4 text-lg  md:animate-[ping_2s_ease-in] ">
            What our Guest Say
          </h3>
          <div className="  ml-4 mt-10 mr-4 bg-orange-100 rounded-2xl md:flex ">
            <img
              className="md:w-24 md:h-auto  ml-8 mt-2 mb-2 "
              src="https://images.pexels.com/photos/7330926/pexels-photo-7330926.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p className="mr-2 ml-2 mt-4 md:p-4 text-center md:text-left ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nihil quibusdam nemo molestias consectetur! Vitae necessitatibus
              recusandae harum totam odit aliquam, voluptatum ea ipsum officia
              expedita, dolores veniam laudantium. Repellendus.
            </p>
          </div>

          <div className="  ml-4 mt-10 mr-4 bg-orange-100 rounded-2xl md:flex ">
            <img
              className="md:w-24 md:h-auto  ml-8 mt-2 mb-2 "
              src="https://images.pexels.com/photos/530024/pexels-photo-530024.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p className="  mr-2 ml-2 mt-4 md:p-4 text-center md:text-left ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nihil quibusdam nemo molestias consectetur! Vitae necessitatibus
              recusandae harum totam odit aliquam, voluptatum ea ipsum officia
              expedita, dolores veniam laudantium. Repellendus.
            </p>
          </div>

          <div className="  ml-4 mt-10 mr-4 bg-orange-100 rounded-2xl md:flex ">
            <img
              className="md:w-24 md:h-auto  ml-8 mt-2 mb-2 "
              src="https://images.pexels.com/photos/2885940/pexels-photo-2885940.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p className="  mr-2 ml-2 mt-4 md:p-4 text-center md:text-left ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nihil quibusdam nemo molestias consectetur! Vitae necessitatibus
              recusandae harum totam odit aliquam, voluptatum ea ipsum officia
              expedita, dolores veniam laudantium. Repellendus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

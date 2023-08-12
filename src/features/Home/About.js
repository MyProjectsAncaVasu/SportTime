export function About() {
  return (
    <>
      <div>
        <div>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>

        {/* <p className="bg-pink-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          delectus maxime nobis. Vitae esse, voluptates, odit error, quisquam at
          quam necessitatibus quaerat nostrum dolorem fugit blanditiis delectus
          atque assumenda maxime!
        </p> */}
        <div className="grid grid-cols-2 bg-pink-300  mt-0">
          <img
            style={{
              height: '100%',
              width: '100%',
              marginRight: 4,
              marginTop: 20,
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFmX6Z_5Lnz4ybLzKbZ2AvWi-XzLhdNmCLw&usqp=CAU"
            alt=""
          />
          <p className="  mt-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nihil quibusdam nemo molestias consectetur! Vitae necessitatibus
            recusandae harum totam odit aliquam, voluptatum ea ipsum officia
            expedita, dolores veniam laudantium. Repellendus.
          </p>
        </div>
      </div>
    </>
  );
}

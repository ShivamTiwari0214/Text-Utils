export default function About () {
    return(<>
   <div className="accordion container my-3" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Idea 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The idea behind TextUtils stemmed from the necessity of having a handy utility that can perform basic text transformations and provide quick analytics without the need for complex software. Whether you're a writer, a student, or a professional, TextUtils aims to streamline your text processing tasks, making your work more efficient and effective.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Why TextUtils
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      In today's fast-paced digital world, clarity and efficiency in communication are paramount. TextUtils was created to help users achieve these goals by offering a straightforward and user-friendly interface that simplifies text manipulation and analysis. Our commitment is to provide a tool that is accessible to everyone, enhancing productivity and ensuring precise control over text content.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Tech Stack used
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Only <strong>Reactjs</strong> is used.
        </div>
    </div>
  </div>
</div>
        </>)
}

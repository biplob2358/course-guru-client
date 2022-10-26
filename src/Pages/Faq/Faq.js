import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="container mt-5 ">
      <Accordion defaultActiveKey="0" className="shadow">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            How do I locate a program that's right for me?
          </Accordion.Header>
          <Accordion.Body>
            Search by degree level: Undergraduate Programs, Master's Degree
            Programs, Doctorate Degree Programs, Teacher Certification Programs,
            Other Certificate Programs, and Online Programs
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can I become a teacher in PA?</Accordion.Header>
          <Accordion.Body>
            Our institute offers several programs leading to teacher
            certification. You can read about these programs in greater detail
            online, and you can also attend a weekly information session to
            learn more about the application process.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How do I learn more about the School of Education's variety of
            program offerings?
          </Accordion.Header>
          <Accordion.Body>
            While our website provides useful information about each program,
            you are encouraged to contact the Office of Admissions and
            Enrollment Services for more detailed information. We are here to
            help you
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What should I include on my resume?
          </Accordion.Header>
          <Accordion.Body>
            Be sure to include a comprehensive list of your academic,
            professional and/or service experiences, achievements, and awards.
            Equally important to include are skills, competencies, or activities
            relevant to the field of education and your specific program of
            interest.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;

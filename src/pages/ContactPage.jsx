import Header from "../componentes/Header/Header";

const ContactPage = () => {
  return(
    <div>
        <p className="header1">
        <Header/></p>
        <div className="page-container">
        <h2>Contact Us</h2><hr/>
        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

        <h2>General Enquiries</h2><hr/>

        <p><b>Vivekanand College Main Campus</b>
          [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
          India

          Phone:<b> **+91 12345 67890**</b>
          Email: <b>**info@vivekanandcollege.edu**</b>
          Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
        </p>

        <h2>Admissions Office</h2><hr/>

        <p>For all admission-related queries regarding undergraduate or postgraduate programs:
          Phone: +91 98765 43210
          Email: admissions@vivekanandcollege.edu
        </p>

        <h2>Admissions Office</h2><hr/>

        <p>For all admission-related queries regarding undergraduate or postgraduate programs:
            Phone: +91 98765 43210
            Email: admissions@vivekanandcollege.edu</p>

        <h2>Student Support Services</h2><hr/>

        <p>For current student support, academic advising, or general assistance:
          Phone: +91 87654 32109
          Email: studentsupport@vivekanandcollege.edu
        </p>

        <h2>Find Us on the Map</h2><hr/>

        <p>[You can embed a Google Map here later using an iframe or a React map library.]
            View on Google Maps
        </p>

        <h2>Send Us a Message</h2><hr/>

        <footer>[A contact form with fields for Name, Email, Subject, Message can be added here.] </footer>


        


    </div>
    </div>



  )


}
export default ContactPage;

import { Link } from "react-router-dom";
import Header from "../componentes/Header/Header";


const HomePage = () => {
 return(
      <div>
        <Header/>
        <div>

                

                    <h1>Welcome to Vivekanad College!</h1><hr/>
                    <img src="/images/clg.png" width="1500" height="300"/>

                    <Link to="/addmision" className="button">Apply Now!</Link>

            

                    <p>*Vivekanand College* is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential. </p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                    <h2>Why Choose Vivekanand College?</h2><hr/>
                    <ul>
                        <li> *Legacy of Excellence:* Decades of commitment to quality education   </li>
                        <li> *Experienced Faculty:* Learn from renowned experts and passionate educators  </li>
                        <li> *Modern Facilities:* Well-equipped labs, expansive library, and comfortable campus.   </li>
                        <li> *Holistic Development:* Focus on co-curricular activities, sports, and community service.</li>
                        <li> *Strong Placements:* Excellent career opportunities with leading companies.</li>


                        <h2>Campus Life & Facilities</h2><hr/>
                        <img src="\images\campus-life.jpg" width="300" height="200"/>
                       <img src="/images/clg1.avif" alt="" />


                   <h3>Ready to start your journey with us?</h3>
                   </ul>

                     <Link to="/courses" className="button">Explore Courses</Link>

            
            

          
          

                </div>
                

      </div>
 )  

}
export default HomePage;

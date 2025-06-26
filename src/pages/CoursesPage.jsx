import Header from "../componentes/Header/Header";
import{Link} from 'react-router-dom';   



const CoursesPage = () => {
    return (
        <div>
            <p className="header1">
            <Header/></p>
            <div className="page-container">
            <h1 style={{color:'blue'}}className="heading">Our Academic Programs</h1>
            <p>
                Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
            </p>

            <h2>Discover Campus Life</h2><hr/>
             
                <video src="\videos\clg3.mp4" width="1000px" controls />
                Your browser does not support the video tag.
            
            <h3 style={{textAlign:"center"}}>Get a glimpse of the vibrant academic and social life at Vivekanand College.</h3>

            <h2>Undergraduate Programs (UG)</h2>
            <hr />
            <ul className="style-list">
                <li>
                    <b>Bachelor of Science (B.Sc.)</b>
                    <ul>
                        <li>Computer Science (3 years)</li>
                        <li>Information Technology (3 years)</li>
                        <li>Biotechnology (3 years)</li>
                    </ul>
                </li>
                <li>
                    <b>Bachelor of Commerce (B.Com)</b>
                    <ul>
                        <li>Accounting & Finance (3 years)</li>
                        <li>Banking & Insurance (3 years)</li>
                    </ul>
                </li>
                <li>
                    <b>Bachelor of Arts (B.A.)</b>
                    <ul>
                        <li>English Literature (3 years)</li>
                        <li>Psychology (3 years)</li>
                    </ul>
                </li>
            </ul>

            <h2>Postgraduate Programs (PG)</h2>
            <hr />
            <ul className="style-list">
                <li>
                    <b>Master of Science (M.Sc.)</b>
                    <ul>
                        <li>Computer Science (2 years)</li>
                        <li>Information Technology (2 years)</li>
                    </ul>
                </li>
                <li>
                    <b>Master of Commerce (M.Com)</b> (2 years)
                </li>
                <li>
                    <b>Master of Arts (M.A.)</b> (2 years)
                </li>
            </ul>

            <h2>Program Details & Fee Structure (Annual)</h2>
            <hr />
            <table border="2px">
                <thead>
                    <tr>
                        <th>Program Type</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Annual Fee (INR)</th>
                        <th>Eligibility</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>UG</td>
                        <td>B.Sc. Computer Science</td>
                        <td>3 Years</td>
                        <td>₹ 85,000</td>
                        <td>10+2 with PCM (50%)</td>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Com. Accounting & Finance</td>
                        <td>3 Years</td>
                        <td>₹ 70,000</td>
                        <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                        <td>PG</td>
                        <td>M.Sc. Information Technology</td>
                        <td>2 Years</td>
                        <td>₹ 95,000</td>
                        <td>B.Sc. IT/CS (50%)</td>
                    </tr>
                </tbody>
            </table>

            <h2>Specialized & Vocational Courses</h2>
            <hr />
            <p>
                In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
            </p>
            <br />
            <h3>Have questions about a specific course?</h3>

            <footer style={{textAlign:'center'}}><p>Explore detailed syllabi and admission criteria on our Admission page</p>

            <Link to="/contact" className="button">Inquire About Courses</Link></footer>
        </div>
        </div>

        
    );
};

export default CoursesPage;

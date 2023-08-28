import { Link } from "react-router-dom";
import { GiSpikyExplosion } from "react-icons/gi";
import { BsAlarm, BsFlagFill } from "react-icons/bs";
import myImg from "../../assets/work.svg";
import myImg2 from "../../assets/undraw_in_no_time_-6-igu.svg";
import vides from "../../assets/videos.mp4";
import Typewriter from "typewriter-effect"
const LandingPage = () => {
  return (
    <div className="w-[auto] h-[auto] flex flex-col ">
      <div className="mt-[60px] w-full h-[auto] flex justify-center ">
        <div className="w-[93%] h-[600px] flex items-center justify-between">
          <div className="w-[50%] h-[570px]   flex-col items-center">
            <div className="w-[620px] h-[250px] rounded-[40px] flex justify-between">
              <div className="w-[250px] h-[250px] rounded-[40px] bg-gray-100 flex flex-col items-center">
                <div className="px-4 py-2 rounded-[20px] text-[gray] text-[14px] bg-white mt-2 font-semibold">
                  Product Design
                </div>
                <div className="mt-[10px] text-[20px] font-semibold">
                <Typewriter
          options={{ loop: true }}
          onInit={(typewriter: any) => {
            typewriter

              .typeString("Mobile Application..")
              .pauseFor(1500)
              .deleteAll()

              .typeString("Desktop Application..")
              .pauseFor(1500)
              .deleteAll()

              .typeString("Tablet Application..")
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}/>
                </div>
                <div className="flex items-center mt-[10px] px-4 py-2 rounded-[20px]  bg-white text-[gray] text-[14px] font-semibold">
                  <div>
                    <BsFlagFill className="mr-2" />
                  </div>
                  Set priority
                </div>
                <div className="w-[70%] mt-[10px">
                  <hr className=" bg-gray-400 h-[2px] mt-[10px]" />
                  <div className="flex mt-2">
                    <div className="w-[40px] h-[40px] mr-2 overflow-hidden rounded-[50%] bg-blue-400">
                      <img
                        src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/313384267_102819315973176_5122701962174171761_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGCO36JvpAxBJEJ1ASMbONGouqtad69xq6i6q1p3r3Grl-sTm1mlcYMAAg0mWKdwuSUcxb8AlatthskZ5rWJzAs&_nc_ohc=LVlhyLSspaUAX9IbTd5&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfAX8aJlP9LCPpXwcdgHuoR5MzD8IeqzZIlRA-YFiQQneQ&oe=64EA8295"
                        alt="P"
                        className="object-cover overflow-hidden w-full h-full"
                      />
                    </div>
                    <div className="w-[40px] h-[40px] mr-2 overflow-hidden rounded-[50%] bg-blue-400">
                      <img
                        src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/346766722_634004711528925_1913167617098478694_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGVAgolwsFQiF7lzV-dDyo9Qb9Ktq3z7aZBv0q2rfPtpoaj_1UujWQ9FPI4iikVaTxyzm9kYwouWxouNeTkXJcp&_nc_ohc=m1SPksdijcMAX_N4TCx&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfB8DEvnHpfhPbC6mtcdeGgJUKLPzmptNGtzMJmhIb0UOw&oe=64E914DB"
                        alt="P"
                        className="object-cover overflow-hidden w-full h-full"
                      />
                    </div>
                    <div className="w-[40px] h-[40px] mr-2 overflow-hidden rounded-[50%] bg-blue-400">
                      <img
                        src="https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/335685146_1431254647410158_8734587649214929586_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFQEl-ycLRqneEF1k0MUvN4UQBB3IeMwwtRAEHch4zDC-QcOXathkOeIwQG4AtDOW2La6e2UYZkZIrKvk1WOTe5&_nc_ohc=5htMJRoHpYUAX-hASPr&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&oh=00_AfCR5q1aX2EJRqOjEH8P1yNOBTv-9tOSI1X9P8FMYzmtcQ&oe=64E9314A"
                        alt="P"
                        className="object-cover overflow-hidden w-full h-full"
                      />
                    </div>
                    <div className="w-[40px] h-[40px] mr-2 overflow-hidden rounded-[50%] bg-blue-400">
                      <img
                        src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-1/274486291_483631703313859_1283785442578453748_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeGf2TKr6DCnX7z24Lxyct7mHb8OCwgd1D8dvw4LCB3UP_WMGEz4ZnRcdqRMm8pivoEePO5FY3QC6OSpWRynxMym&_nc_ohc=q1AWd2Mw7ggAX9gDO0_&_nc_ht=scontent.fabb1-1.fna&oh=00_AfBungohx6fDjbPBIaj2PF_wK5L4Sum3d_415VivDmivgA&oe=64EA8724"
                        alt="P"
                        className="object-cover overflow-hidden w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[340px] h-[250px] rounded-[40px] overflow-hidden bg-red-400 ">
                <video
                  src={vides}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                />
              </div>
            </div>
            <div className="w-[620px] h-[300px] rounded-[40px] mt-7 flex items-center justify-between">
              <div className="h-[300px] w-[400px] rounded-[40px] overflow-hidden">
                <img src={myImg}/>
                {/* <img /> */}
              </div>
              <div className="w-[200px] h-[300px] rounded-[40px]  flex flex-col items-center justify-center">
                <div className="w-[180px] h-[100px] rounded-[25px] border border-dotted mb-[15px] flex items-center justify-center">
                 <Link to="/ask">
                 <div className=" flex items-center flex-col justify-center">
                    <div>
                      <BsAlarm />
                    </div>
                    <div className="mt-[5px] text-[14px] text-[gray]">
                      Create Tasks
                    </div>
                  </div>
                 </Link>
                </div>
                <div className="w-[180px] h-[150px] rounded-[40px] bg-gray-300">
                    <img src={myImg2}/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[47%] h-[570px] flex flex-col ">
            <div className="font-Poppins text-[45px] w-[550px] font-semibold mt-[130px]">
              {/* Manage All Of Your Work In One Place Efficiently{" "}
              <span className="absolute mt-[6px] ml-1">
                <GiSpikyExplosion className="w-[40px] h-[40px] " />
              </span> */}
              <Typewriter
          options={{ loop: true }}
          onInit={(typewriter: any) => {
            typewriter

              .typeString("Manage All Your Work....")
              .pauseFor(1500)
              .deleteAll()

              .typeString("Write Them Down ...")
              .pauseFor(1500)
              .deleteAll()

              .typeString("Do Hard Things...")
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
            </div>
            <div className="w-[320px] font-Poppins font-extrabold text-[14px] mt-[5px]  text-[#444444]">
              Manage your work, timelines and team mates all at once.. Set and
              follow timelines, assign tasks and keep your projects in check.
            </div>
            <div className="w-full h-[auto] flex items-center mt-[10px]">
              <div className="w-[260px] h-[80px] flex items-center justify-between">
                <Link
                  to="/ask"
                  className=" px-6 py-2 bg-black text-white rounded-[20px] mb-[25px] font-Poppins "
                >
                  Signin
                </Link>
                <Link
                  to="/ask"
                  className=" px-6 py-2 bg-purple-700 text-white font-Poppins rounded-[20px] mb-[25px] "
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* <br /> */}
            <hr className="border border-[#3b3b3b] mt-[-10px]"/>
            <div className="flex justify-between ">
              <div className="uppercase mt-[5px] font-semibold">
                Tasks <br /> and projects
              </div>
              <div className="flex w-[450px] h-[auto] flex-wrap">
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  Photo Design
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  Design Mockup
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  UI/UX
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  Development
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  Branding
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  Backend
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  Frontend
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  Full-Stack
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  Graphics Designer
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  PhotoShop
                </div>
                <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">
                  Artificial Intelligence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

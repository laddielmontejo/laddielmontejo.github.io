            var newmp4 = 'emtedited.mp4'
            var video = document.getElementById("myVideo");
            var btn = document.getElementById("myBtn");

            function myFunction() 
            {
              if (video.paused) {
                video.play();
                pauseBtn.innerHTML = "Pause";
              } else {
                video.pause();
                pauseBtn.innerHTML = "Play";
              }
            }
            
             function myFunction1() 
            {
               window.location="index.html";
            }
            
            function myFunction2() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "code.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "C++ and Java";
               document.getElementById("description").innerHTML = "This course is the C++ and Java programming languages. \n\
                Using C++, the student will focus on structured programming techniques, proper program design and object-oriented programming techniques, \n\
                programming concepts and skills. Students must have at least a 2.5 GPA and a B or better in Algebra 2 to enroll. ";
            }
            
            function myFunction3() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "health.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "Health Science";       
              document.getElementById("description").innerHTML= "Students will acquire knowledge and skills in core competencies including an introduction to the health care delivery system, \n\
                        human anatomy and physiology, medical terminology, infection control, human growth and development and interpersonal communication. \n\
                        Prior to completion of the program, students will sit for the CNA exam and be prepared for entry level employment \n\
                        and/or continued education at the post-secondary level";
            }
            
            function myFunction4() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "constructiontech.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "Construction technology";       
              document.getElementById("description").innerHTML= "Students will acquire knowledge and skills such as safety, framing, roofing, hanging drywall, installation of interior and exterior trim, doors, and windows, blueprint reading and construction estimating. Modelconstruction and on-site construction projects are used to provide students with Project-based experience using current tools, equipment, and materials. Students completing this program will be prepared for related entry-level employment and/or continued education at the post-secondary level. Career Connections Certification";
            }
            
            function myFunction5() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "cullinaryarts.MP4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "Culinary Arts";       
              document.getElementById("description").innerHTML= "Students will receive instruction and participate in project-based experiences in the fundamentals of safe and sanitary food handling and operation of a commercial kitchen. Students will use a variety of cooking methods to produceentrees, salads, desserts and other dishes. Students will become familiar with the different phases involved in the operation of a restaurant, including management of a kitchen and dining area. Successful completers of this program will be prepared for related entry-level employment and/or continued education at the post-secondary level. AAFCS Certification.";
            }
            
            function myFunction6() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "emtedited.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "Emergency Medical Technician";       
              document.getElementById("description").innerHTML= "This course is designed to take high school students with little or no medical background and teach them to work on an ambulance using Basic Life Support Measures. Students that successfully pass all requirements are eligible for apprenticeship with the Kansas City Fire Department. Students must have at least a 2.5 GPA and 90% or better attendance to enroll. NREMT Certification.";
            }
            
            function myFunction7() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "automotivecollision.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "Automotive Collision Repair";       
              document.getElementById("description").innerHTML= "Students will acquire knowledge and skills used by auto collision technicians in the repair and refinishing of damaged vehicles. Instruction will involve classroom theory, demonstrations, and hands-on repair of practice panels and customer vehicles. Students will train on school-supplied tools and shop equipment using current technology. Successful completers of this program will be prepared for related entry level employment and/or continued education at the post-secondary level. I-CAR Certification Curriculum.";
            }
            
            function myFunction8() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "automotive.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "Automotive Technology ";       
              document.getElementById("description").innerHTML= "Students will acquire knowledge, skills, and experience in the repair and maintenance of automobiles and light trucks. Efficient application and use of safe shop practices, tools and equipment is an important part of the training. Through classroom and live shop experiences, students will have an opportunity to learn entry-level skills needed in the repair and maintenance of cooling systems, brakes, steering and suspension, as well as engine performance. Successful completers of thisprogram will be prepared for related entry-level employment and/or continued education at the post-secondary level. ASE Certification.";
            }
            
            function myFunction9() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "engineering.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "Introduction to Engineering Design";       
              document.getElementById("description").innerHTML= "Students will dig deep into the engineering design process, applying math, science, and engineering standards to hands-on projects. They work both individually and in teams to design solutions to a variety of problems using 3D modeling software, and use an engineering notebook to document their work. End-of-Course Exam.";
            }
            
            function myFunction10() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "nursing.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "Educator Prepartion Program";       
              document.getElementById("description").innerHTML= "This class is designed to expose students to the teaching profession. Students will participate in teacher practicums in KCPS elementary schools. Students will complete weekly journals and be evaluated at least once per quarter. Students must have at least a 2.5 GPA and 85% or better attendance to enroll. Dual credit is available. AAFCS Certification.";
            }
            
            function myFunction11() 
            {
               window.location.href = "contact.html"
            }
            var vid = document.getElementById("myVideo");

            function enableMute() { 
                if (video.muted === false)
                {
                    vid.muted = true;
                    soundBtn.innerHTML = "Unmute";
                } else {
                    vid.muted = false;
                    soundBtn.innerHTML = "Mute";
                }
            } 

          
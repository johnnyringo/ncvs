import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-10 w-40">
                      <Avatar
                        src="/img/virtualSearchLogo.jpg"
                        alt="Virtual Search Logo"
                        
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-orange-400">Email</Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        22
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        2023 Missions
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        10
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        2023 Trainings
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        5
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Conferences
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  National Center for Virtual Search
                </Typography>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                  11741 West Rose Lake St.
                  </Typography>
                  <Typography className="font-medium text-blue-gray-700">
                    Star, Idaho
                  </Typography>
                </div>
               
                <div className="mb-2 flex items-center justify-center gap-2">
                  <PhoneArrowDownLeftIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                  1-866-VSP FIND  (877-3463)
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    The Virtual Search Process was developed by a retired Alaska State Trooper, Paul M Burke. With over fifty years of search and rescue experience at all levels of SAR Operations, Mr. Burke has been able to look at a wide  variety  of search operations from many positions .
 <br/>
 As an instructor in Search Management, and as a continuing Practitioner in the science of finding lost subjects, Mr. Burke has developed one of the most significant methodologies for understanding and processing the complexities of search operations and those who become lost. By utilizing a  broad base of information and harnessing the power of the internet, Mr. Burke has taken the understanding of the Lost Person from an elementary drawing to  a full color, high-definition picture of the  missing. This image, with all of its  depth, breadth, and  definition, is then put through an algorithm with human VSP Analysts trained to understand the subject within the environment under which they became lost.
 <br/>
 As a result, SAR Resources at the outset of any search  are provided with the most intricate and accurate picture of the lost subject and their environment in our experience. This process, when fully utilized , has historically achieved greater than 83-85% probability that the subject will be found in the operational period in which it is used. While there is no guarantee of similar results in the next case we conduct a VSP in, we are confident in giving search managers and SAR resources a picture like no other, and the possibility of achieving results they have never had in the past. 
 ​<br/>
 Developed over ten years, VSP process and the applied science behind it are being constantly evaluated and improved.  Analysts are continually being developed throughout the SAR community and  the process of Virtual Search Planning has revived  search operations. Now, the lost have a much higher opportunity to be located and brought home, simply because we have a better understanding of where they are.
 ​<br/>
 All of the men and women who contribute to this process do so without cost to the Agency Having Jurisdiction (AHJ) that requests this service. It is simply about using the gifts one has been given and the heart to find the lost. How they make a living is a broad subject, but VSP is how they make a life worth living.
                    </Typography>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;

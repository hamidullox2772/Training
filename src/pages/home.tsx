import { Button } from "@/components/ui/button";
import { featuredItems, programs } from "@/constants";
import men from "@/assets/-_joshua_kimmich-removebg-preview.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useUserState } from "@/stores/user.store";
import { CgGym } from "react-icons/cg";
import { LogOut } from "lucide-react";
import { auth } from "@/firebase/fire-config";

const Home = () => {
  const { user, setUser } = useUserState();

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      navigate("/auth");
    });
  };
  return (
    <>
      <div className="w-full h-screen flex items-center mt-20">
        <div className="max-w-xl ml-60 flex h-full flex-col justify-center">
          <h1 className="text-9xl font-samibold uppercase">FOOTBALL TRAINING WITH ME</h1>
          <p className="text-muted-foreground">
            The best way to train and improve your football skills.
            Join the club and get access to the best training!
          </p>

          {user ? (
            <div className="flex gap-4">
              <Link to={"/dashboard"}>
                <Button className="w-fit mt-6 font-bold h-12" size={"lg"}>
                  <span>Go To Training</span>
                  <CgGym className="h-5 w-5 ml-2" />
                </Button>
              </Link>

              <Link to={"/auth"}>
                <Button
                  className="w-fit bg-destructive mt-6 font-bold h-12"
                  size={"lg"}
                  onClick={onLogout}
                >
                  <span>LogOut</span>
                  <LogOut className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          ) : (
            <Link className="w-[100px]" to={"/auth"}>
              <Button className="w-fit mt-6 font-bold h-12" size={"lg"}>
                Join club now
              </Button>
            </Link>
          )}

          <div className="mt-24">
            <p className="text-muted-foreground">AS FEATURED IN</p>
            <div className="flex items-center gap-4 mt-2">
              {featuredItems.map((Icon, index) => (
                <Icon key={index} className="w-12 h-12" />
              ))}
            </div>
          </div>
        </div>
        <img src={men} className="w-1/4 relative -top-20" />
      </div>

      <div className="container max-w-5xl mx-auto">
        <h1 className="text-4xl">Not sure where to start?</h1>
        <p className="mt-2 text-muted-foreground">
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </p>
        <div className="grid grid-cols-3 gap-4 my-8">
          {programs.map((item) => (
            <Card
              key={item.title}
              className="p-8 relative cursor-pointer group"
            >
              <h3>{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{item.descr}</p>
              <Button
                size={"icon"}
                variant={"ghost"}
                className="absolute right-2 top-1/2 group-hover:translate-x-1 transition-transform"
              >
                <FaArrowRightLong />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

import { useEffect } from 'react';
import { useGeneralContext } from '../hooks/useGeneralContext';
import blogs from '../services/Article';

const Profile = () => {
  const { dispatch } = useGeneralContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR_SEARCH', payload: true });
  }, [dispatch]);
  return (
    <>
      {/* profile */}
      <div>
        <div className="relative">
          <div className="w-full overflow-hidden lg:h-[400px]">
            <img src={`https://source.unsplash.com/random/1920x1000/?nature`} className="w-full" alt="thumbnail" />
          </div>
          <div className="md:w-32 w-28 rounded-full overflow-hidden bg-white border-gray-50 shadow-md absolute left-[10%] -bottom-14 border-[0.4rem]">
            <img src={`https://source.unsplash.com/random/500x500/?profile`} className="w-[500px]" alt="profile" />
          </div>
        </div>
        <div className="flex justify-end container mx-auto px-10 md:px-0">
          <div>
            <button className="border-2 md:text-base text-sm py-2 px-3 rounded-lg mt-4 font-semibold text-green-forest border-green-forest">Edit Profile</button>
          </div>
        </div>
        <div className="container mx-auto md:py-10 py-6 px-5 md:px-0 text-green-darker">
          <h3 className="font-bold text-2xl">Adzeni Rustianda</h3>
          <p className="my-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos alias dolore similique natus, quae officia doloremque, exercitationem neque excepturi incidunt quibusdam! Illum cupiditate quo accusantium aliquam deleniti
            provident hic similique, unde, repellat esse beatae, repudiandae blanditiis corrupti voluptas ullam! Ipsum eveniet nulla voluptatem vitae, dicta nihil velit dolor tempora?
          </p>
        </div>
        <hr />
      </div>
      {/* end profile */}

      {/* start content */}
      <div className="container mx-auto px-5 md:px-10 py-10">
        <h2 className="font-bold text-3xl mb-10">All Article</h2>
        <div className="flex flex-col lg:flex-row justify-center md:gap-20 gap-10">
          <div className="lg:w-1/2 w-full rounded-xl overflow-hidden">
            <img src={`https://source.unsplash.com/random/800x500/?programming`} className="w-full" alt="thumbnail" />
          </div>
          <div className="lg:w-1/2 w-full">
            <h3 className="md:text-3xl text-2xl font-bold"> Lorem ipsum dolor sit amet consectetur</h3>
            <div className="flex items-center gap-3 text-xs lg:text-base mb-3">
              <div className="w-8 my-5 rounded-full overflow-hidden">
                <img src={`https://source.unsplash.com/random/500x500/?profile`} alt="profile" />
              </div>
              <p className="font-bold text-xs sm:text-base">Adzeni Rustianda</p>
              <p className="text-xs hidden lg:block sm:text-base"> 10 days ago</p>
            </div>
            <p className="mb-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cumque quo temporibus rem dolor sequi saepe ullam et iste aliquid cum dolorem voluptas consequuntur laborum, debitis est eos commodi voluptatum nesciunt delectus
              eligendi facilis ducimus fugiat. Totam, voluptate ab. Pariatur, optio ex facilis deleniti minus possimus cum aspernatur ab, ipsum odio maiores iusto accusamus vel molestias laboriosam asperiores inventore enim voluptatibus.
            </p>
            <span className="text-xs font-bold cursor-pointer text-green-forest border-2 border-green-forest py-1 px-3 rounded-md">Programming</span>
          </div>
        </div>
        <div className="flex flex-wrap py-10 text-green-darker">
          {blogs.map((blog) => {
            return (
              <div className="lg:w-1/4 p-2 md:p-5 sm:w-1/3 w-1/2 mb-8">
                <img src={`https://source.unsplash.com/random/500x500/?${blog.category}`} className="rounded-3xl mb-3" alt="thumbnail" />
                <div className="my-8 flex items-center gap-3 text-xs lg:text-base mb-3">
                  <div className="w-8 rounded-full overflow-hidden">
                    <img src={`https://source.unsplash.com/random/500x500/?profile`} alt="profile" />
                  </div>
                  <p className="font-bold text-xs sm:text-base">Adzeni Rustianda</p>
                  <p className="text-xs hidden lg:block sm:text-base"> 10 days ago</p>
                </div>
                <h3 className="font-bold text-base lg:text-xl mb-3 truncate">{blog.title}</h3>
                <p className="mb-3 text-xs lg:text-base">{blog.body}</p>
                <span className="text-xs font-bold cursor-pointer text-green-forest border-2 border-green-forest py-1 px-3 rounded-md">{blog.category}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* end content */}
    </>
  );
};

export default Profile;

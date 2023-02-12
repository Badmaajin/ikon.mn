import { useRouter } from "next/router";
import { collection, query, where, getDocs } from "firebase/firestore";
import { app, database } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import { Toolbar } from "/components/toolbar";

export default function Slug() {
  const [note, setNote] = useState("");
  const router = useRouter();
  const dbInstance = collection(database, "business");
  const id = +router.query.slug;
  const q = query(dbInstance, where("id", "==", id.toString()));
  console.log(note);
  const getData = () => {
    getDocs(q).then((data) => {
      setNote(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Toolbar />
      <div class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          {note?.length != 0 &&
            note.map((note) => (
              <div key={note}>
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                  IKON NEWS
                </h1>
                <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                  <img
                    class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                    src={note.image}
                    alt=""
                  />
                  <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p class="text-sm text-blue-500 uppercase">Business</p>
                    <a
                      href="#"
                      class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
                    >
                      {note.title}
                    </a>
                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      {note.body}
                    </p>
                  </div>
                </div>
              
              </div>          
            ))}
        </div>
      </div>
    </>
  );
}

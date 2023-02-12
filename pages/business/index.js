import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  collectionGroup,
} from "firebase/firestore";
import { app, database } from "../../firebaseConfig";
import { Toolbar } from "/components/toolbar";
const dbInstance = collection(database, "business");
export default function Business() {
  const [notesArray, setNotesArray] = useState([]);
  console.log(notesArray);
  const getData = () => {
    getDocs(dbInstance).then((data) => {
      setNotesArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const router = useRouter();
  return (
    <>
      <Toolbar />
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Business
          </h1>
          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {notesArray.map((note) => (
              <div
                key={note.id}
                onClick={() => {
                  router.push({
                    pathname: "/business/[slug]",
                    query: { slug: note.id },
                  });
                }}
              >
                <div class="lg:flex">
                  {!!note.image && (
                    <img
                      class="object-cover w-full h-56 rounded-lg lg:w-64"
                      src={note.image}
                      alt=""
                    />
                  )}
                  <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a
                      href="#"
                      class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                    >
                      {note.title}
                    </a>
                    <span class="text-sm text-gray-500 dark:text-gray-300">
                      On: 20 October 2019
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { Toolbar } from "../components/toolbar";
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
import { database } from "firebaseConfig";
import Image from "next/image";
import { Footer } from "../components/footer";

const dbInstance = collection(database, "ontsloh");

export default function Home() {
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
      <div class="bg-white dark:bg-gray-900">
        <div class="container mx-auto px-5 py-10">
          <div class="-m-4 flex flex-wrap">
            <h1 class="text-xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              ДЭЛХИЙН ШИНЭ, ШИЛДЭГ МЭДЭЭ МЭДЭЭЛЛИЙН ЦАГ АЛДАЛГҮЙ АВЦГААЯ.
            </h1>
            {notesArray.map((note) => (
              <div
                key={note.id}
                onClick={() => {
                  router.push({
                    pathname: "/pages/[slug]",
                    query: { slug: note.id },
                  });
                }}
              >
              <div class=" p-4 w-full">
                <a class="relative block h-48 w-full overflow-hidden rounded">
                {!!note.image && (
                <Image
                  alt="ecommerce"
                  class="block h-full  object-cover object-center cursor-pointer"
                  width={300}
                  height={200}
                  src={note.image}
                  />
                 )}
                </a>
              <div class="mt-4">                
              
                <h2 class="title-font text-l font-medium text-gray-900">
                  {note.title}
                </h2>
              </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

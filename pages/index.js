import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"

const workMedia = [
  "/work-copy/soho_davon.jpg",
  "/work-copy/welldone.jpg",
  "/work-copy/clozee.gif",
  "/work-copy/simulacra.jpg",
  "/work-copy/soho_courtney.jpg",
  "/work-copy/simulacra_maddie.jpg",
  "/work-copy/bozo.gif",
  "/work-copy/simulacra_nadia_marco.jpg",
  "/work-copy/welldone_daphne_travis.jpg"
]

const clientList = [
  ["CloZee", "L.A. Dance Project", "Soho House", "The Aster", "Undesigned LA"],
  ["Melody Wine Bar", "Bloodlust Wine Bar", "BOZO Mag Gallery", "Babst Gallery"],
  ["2220 Arts + Archives", "Dance Camera West", "Buffer Fringe Festival Cyprus"],
  ["Hosek Contemporary Berlin", "Metre Squared London"]
]

const infoMedia = [
  "/meg-copy/welldone_bts.jpg",
  "/meg-copy/launch_rehearsal_full.jpg",
  "/meg-copy/malibu.gif",
  "/meg-copy/teaching.jpg",
  "/meg-copy/legs_color.jpg",
  "/meg-copy/launch_rehearsal_grayscale.jpg",
  "/meg-copy/suuvi_bts.jpg"
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const [workActive, setWorkActive] = useState(false)
  const [infoActive, setInfoActive] = useState(false)

  const handleOpen = (s) => {
    setOpen(true)
    if (s == "work") {
      setWorkActive(true)
    } else if (s == "info") {
      setInfoActive(true)
    }
  }

  const handleWorkActive = () => {
    setOpen(true)
    setWorkActive(true)
    setInfoActive(false)
  }

  const handleInfoActive = () => {
    setOpen(true)
    setWorkActive(false)
    setInfoActive(true)
  }

  const handleClose = () => {
    setWorkActive(false)
    setInfoActive(false)
    setOpen(false)
  }

  return (
    <Layout>
    <div className="relative bg-[#f7f5ee] w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-between">

        {/* NAV */}
        <div className="flex w-full items-center justify-center px-4 pt-8 md:p-8">
          <div className="basis-1/3 md:basis-1/4 relative h-full">

            {/* MOBILE  */}
            <div className="flex justify-between md:hidden text-xs">
              {workActive ? (
                <button onClick={() => handleClose()}><span className="font-thin">-</span>{" "} Work</button>
              ) : (
                <button onClick={() => handleWorkActive()}><span className="font-thin">+</span>{" "} Work</button>
              )}

              {infoActive ? (
                <button onClick={() => handleClose()}><span className="font-thin">-</span> Info</button>
              ) : (
                <button onClick={() => handleInfoActive()}><span className="font-thin">+</span> Info</button>
              )}
            </div>

            {/* DESKTOP */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  enter={{ opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.1, opacity: { ease: "linear" }, delay: 0.6 }}
                  className="absolute top-0 left-0 h-full w-full hidden md:flex justify-between text-xs"
                >
                  {workActive ? (
                    <button onClick={() => handleClose()}><span className="font-thin">-</span>{" "} Work</button>
                  ) : (
                    <button onClick={() => handleWorkActive()}><span className="font-thin">+</span>{" "} Work</button>
                  )}
                  {infoActive ? (
                    <button onClick={() => handleClose()}><span className="font-thin">-</span>{" "} Info</button>
                  ) : (
                    <button onClick={() => handleInfoActive()}><span className="font-thin">+</span>{" "} Info</button>
                  )}                
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="logo basis-1/3 md:basis-1/2 text-center">
            <button onClick={() => handleClose()}>MP</button>
          </div>
          <div className="basis-1/3 md:basis-1/4 text-xs flex justify-end gap-2 md:gap-8">
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  enter={{ opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.1, opacity: { ease: "linear" }, delay: 0.6 }}
                >
                  <a href="mailto:megan@emparadance.com">Email</a>
                </motion.div>
              )}
            </AnimatePresence>
            <a href="http://instagram.com/megparadowski" target="_blank">IG</a>
            <a href="https://vimeo.com/user218114889" target="_blank">Vimeo</a>
          </div>
        </div>

        <AnimatePresence>
          {!open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            enter={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, opacity: { ease: "linear" } }}
            className="h-full flex flex-col items-center justify-between px-4 pt-8 md:p-8">
          <div className="basis-1/4 grid grid-cols-8 justify-end w-full">
            <div className="col-start-4 md:col-start-6 col-span-5 md:col-span-2 aspect-video">
            <iframe
              src="https://player.vimeo.com/video/1167581857?h=1a9de1f8cf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1"
              className="bg-black w-full h-full"
            />
            </div>
          </div>

          <div className="basis-[37.5%] flex flex-col md:flex-row w-full justify-center md:justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              enter={{ opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.1, opacity: { ease: "linear" }, delay: 0.2 }}
              className="basis-1/4 hidden md:flex h-full justify-between items-center text-xs">
              <button onClick={() => handleOpen("work")}><span className="font-thin">+</span>{" "}Work</button>
              <button onClick={() => handleOpen("info")}><span className="font-thin">+</span>{" "} Info</button>
            </motion.div>
            <h1 className="h1 basis-1/2 text-center">Megan Paradowski</h1>
            <div className="basis-1/4 text-xs text-center md:text-left">
              <h2 className="inline font-['aktiv-grotesk']">Megan Paradowski is a choreographer and movement director in Los Angeles.{" "}</h2>
              <p className="inline">She approaches commercial movement through a fine-art lens. Megan is the founder & director of contemporary dance company <a href="http://emparadance.com">Empara.</a></p>
            </div>
          </div>

          <div className="basis-1/4 grid grid-cols-8 w-full items-end">
            <div className="col-span-5 md:col-span-2 aspect-video">
            <iframe
              src="https://player.vimeo.com/video/1167590263?h=189294e372&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1"
              className="bg-black w-full h-full"
            />
            </div>
          </div>
          
          <div className="basis-[12.5%] flex flex-col justify-center md:justify-end">
            <p className="text-xs">Let's connect — <a href="mailto:megan@emparadance.com">megan@emparadance.com</a></p>
          </div>
          </motion.div>
          )}

          {open && workActive && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              enter={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, opacity: { ease: "linear" }, delay: 2 }}
              className="h-full flex flex-col items-center justify-between w-full pt-8 md:pt-0">
                <div className="basis-1/2 w-full max-h-[45vh]">
                  <Carousel media={workMedia} />
                </div>
                <div className="basis-1/2 flex flex-col items-center justify-center gap-0 md:gap-2 text-xs px-4 md:px-0">
                    {clientList.map((clientRow, i) => (
                      <div
                        key={i}
                        className="md:flex w-full items-center justify-center gap-10"
                      >
                        {clientRow.map((client, i) => (
                          <p>{client}</p>
                        ))}
                      </div>
                    ))}
                </div>
            </motion.div>
          )}

          {open && infoActive && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              enter={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, opacity: { ease: "linear" }, delay: 2 }}
              className="h-full flex flex-col items-center justify-between w-full">
                <div className="basis-1/2 flex items-center justify-center text-xs px-4 pt-8 md:p-8">
                  {/* <h1 className="h6 basis-1/3">MP</h1> */}
                  <p className="w-full md:basis-1/2 indent-12">
                  Megan Paradowski is an LA-based choreographer and movement director.  
                  She holds a BFA in Dance from NYU’s Tisch School of the Arts and is the founder and director of contemporary dance company{" "}<a href="http://emparadance.com">Empara</a>. 
                  Megan was recently the artist in residence at L.A. Dance Project for LAUNCH:LA 2025.
                  Her work has been featured in publications such as the LA Times, Autre Magazine, LA Dance Chronicle, and Fjord Review, and she has received grants from the German Consulate General in Los Angeles and the U.S. Embassy in Cyprus. 
                  Megan’s choreography explores pedestrianism, theatricality, and risk-driven movement, breaking boundaries between mediums to craft visceral, transformative experiences.
                  </p>
                </div>
                <div className="basis-1/2 w-full max-h-[45vh] pt-4 md:pt-0">
                  <Carousel media={infoMedia} />
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </Layout>
  )
}
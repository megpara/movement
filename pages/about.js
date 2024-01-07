import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function About() {
    return(
        <Layout>
            <Menu />
            <div className="wrapper">
            <div className="md:px-[15px] py-4 w-full">
                <div className="name text-center !text-3xl md:!text-[6vw]">Megan Paradowski</div>
            </div>
            <div className="md:flex flex-row md:px-32 md:pt-16 items-center">
                <img src="headshot.png" className="md:w-1/3 md:mr-8" />
                <div className="paragraph md:pt-0 pt-8 md:text-left text-justify">
                Megan Paradowski is a mover and maker based in Los Angeles. She has created and performed in contemporary dance works across the US and Europe. She co-founded <a href="https://www.voltacollective.com/" target="_blank" className="uppercase font-bold text-xs">Volta</a>, a Los Angeles based dance theatre company, and has worked on commercial photo and video shoots including CloZee, Loren Stewart, and Undesigned LA, amongst others. Megan is interested in collaborating with other artists and celebrating other forms, as well as transcendence through live performance. She holds a BFA in Dance from Tisch School of the Arts at NYU, and she has taught for the University of Redlands, South Pasadena High School, and Genesis Studios, amongst others.
                </div>
            </div>
            <div className="paragraph leading-8 pt-16 md:px-32 uppercase !text-sm">
                <div className="pt-8 pb-2 border-b-[1px] border-black w-full"><strong>Teaching Experience</strong></div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div>Genesis Studios</div>
                    <div className="font-bold text-xs"><a href="https://genesisstudiosla.com/">Volta Company Class</a></div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">University of Redlands</div>
                    <div className="w-1/3">Dr. Joseph Modica</div>
                    <div className="font-bold text-xs"><a href="mailto:joseph_modica@redlands.edu">Email</a></div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">South Pasadena High School</div>
                    <div className="w-1/3">Courtney Cheyne</div>
                    <div className="font-bold text-xs"><a href="mailto:ccheyne@spusd.net">Email</a></div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">Base Studios London</div>
                    <div>Master Class</div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">The Hub Studios London</div>
                    <div>Master Class</div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">The Space LA</div>
                    <div>Volta Fall Workshop</div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">Arts on Site NYC</div>
                    <div>Master Class</div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">Los Angeles Dance Festival</div>
                    <div>Workshop</div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">Brockus Project Studios</div>
                    <div>Workshop</div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">Stomping Ground LA</div>
                    <div>Master Class</div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">Studio2 Berlin</div>
                    <div>Master Class</div>
                </div>
                <div className="border-b-[1px] border-black w-full py-2 flex justify-between">
                    <div className="w-1/3">Twinkle Toes Dance Company</div>
                    <div className="w-1/3">Karen Gladis</div>
                    <div className="font-bold text-xs"><a href="mailto:twinkletoesdancela@gmail.com">Email</a></div>
                </div>
              </div>
              <div className="paragraph leading-8 pt-16 md:px-32 uppercase !text-sm">
                <div className="pt-8 pb-2 border-b-[1px] border-black w-full"><strong>Contact</strong></div>
                <div className="border-b-[1px] border-black w-full py-2 md:flex md:justify-between"><div className="md:w-1/3">Email</div><div className="font-bold text-xs"><a href="mailto:meganparadowski@gmail.com">meganparadowski@gmail.com</a></div></div>
                <div className="border-b-[1px] border-black w-full py-2 md:flex md:justify-between"><div className="md:w-1/3">Social Media</div><div className="font-bold text-xs"><a href="https://www.instagram.com/megparadowski/" target="_blank">Instagram</a></div></div>
                <div className="border-b-[1px] border-black w-full py-2 md:flex md:justify-between"><div className="md:w-1/3">Location</div><div>Los Angeles</div></div>
              </div>
              </div>
        </Layout>
    )
}
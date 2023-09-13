import { SelectedPage } from '../shared/type'
import useMediaQuery from '@/hooks/useMedia'
import ActionButton from '../shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGrapic from "@/assets/HomePageGraphic.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')
  return (
    <section
      id="home"
      className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      <div className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'>
        <div className="z-10  md:basis-3/5">
          <div className="md:-mt-20">
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img alt="home page" src={HomePageText} />
              </div>
            </div>
            <p className='mt-8 text-sm'>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          <div className='mt-8 flex items-center gap-8'>
            <ActionButton setSelectedPage={setSelectedPage} >
              Join Now

            </ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500
            onClick={() => setSelectedPage(SelectedPage.Contact)}
            href={`#${SelectedPage.Contact}`}
            '>
              <p>Learn More</p>
            </AnchorLink>
          </div>

        </div>
        <div className="flex basis-3/5 justify-center md:z-10
              md:ml-40 mt-16 md:justify-items-end">
          <img src={HomePageGrapic} alt="home-pageGraphic" />
        </div>
      </div>

      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Home
// g
// h
// }
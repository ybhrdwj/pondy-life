import { FacebookShare,TwitterShare,WhatsappShare,TelegramShare,EmailShare } from 'react-share-kit/dist/index.es'

const Hero = () => {
  const shareUrl = 'https://pondy.life';
  const shareTitle = 'the exhaustive list of food,stay & things to do in pondi';
  return (
    <div className="relative bg-cover bg-center text-center py-16 lg:py-32" style={{ backgroundImage: "url('/hero.png')" }}>
      <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white">The most trusted list of recos for pondy</h1>
      <p className="mt-2 text-base sm:text-lg lg:text-2xl text-white">Stop getting lost on Google.</p>
      <div className='py-2'>
      <WhatsappShare
  url={shareUrl}
  title={shareTitle}
  separator=":: "
  round="true"
  size={"32px"}
  onClick={() => {
    // Track the share button click event
    trackEvent('Share Button Clicked', {
      platform: 'WhatsApp',
      url: shareUrl,
      title: shareTitle,
    });
  }}
> </WhatsappShare>
  <TelegramShare
  url={shareUrl}
  title={shareTitle}
  separator=":: "
  round="true"
  size={"32px"}
   onClick={() => {
    // Track the share button click event
    trackEvent('Share Button Clicked', {
      platform: 'Telegram',
      url: shareUrl,
      title: shareTitle,
    });
  }}>
 </TelegramShare>
  <TwitterShare
  url={shareUrl}
  title={shareTitle}
  separator=":: "
  round="true"
  size={"32px"}
   onClick={() => {
    // Track the share button click event
    trackEvent('Share Button Clicked', {
      platform: 'Twitter',
      url: shareUrl,
      title: shareTitle,
    });
  }}>
</TwitterShare>  
    </div> 
    </div>
  );
};

export default Hero;

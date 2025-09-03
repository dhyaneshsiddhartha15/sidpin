
const GoogleMapEmbed = () => {
  return (
    <div className="z-[9999]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.46649341926!2d78.19086607624573!3d29.994758820921927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390939da368b9c4b%3A0x96bec99dc6dc6e1b!2sSidpin%20Digital%20%7C%20A%20Creative%20%26%20Performance%20Agency!5e0!3m2!1sen!2sin!4v1756714158878!5m2!1sen!2sin"
        className="border-none w-full h-[400px] "
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sidpin Digital Location"
      />
    </div>
  );
};

export default GoogleMapEmbed;

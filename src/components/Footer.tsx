import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20 py-10 bg-pink-500">
      <div className="flex flex-col md:flex-row justify-between text-white items-center container mx-auto">
        <Link href="/" className="font-bold text-2xl">
          Home
        </Link>

        <div className="flex gap-5 items-center">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">FAQs</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="mailto:dish@dash09.com">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

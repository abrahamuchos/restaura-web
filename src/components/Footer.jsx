import { SOCIAL_MEDIA_LINKS } from "../assets/constants/index.jsx";

export default function Footer() {

  return (
    <footer className='mb-8 mt-20'>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((social, i) => (
          <a key={i} href={social.href} target="_blank" rel="noopener">
            {social.icon}
          </a>
        ))}
      </div>
      <p className='mt-8 text-center tracking-tighter text-neutral-500'>
        &copy;Restaura {new Date().getFullYear()} | Built with ❤️ by Abrahamuchos
      </p>
    </footer>
  );
}




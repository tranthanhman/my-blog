import { Link } from 'react-router-dom';
import avatar from '~./assets/avatar.jpg';
import facebook from '~./assets/icons/facebook.svg';
import linkedin from '~./assets/icons/linkedin.svg';
import github from '~./assets/icons/github.svg';
import { useState } from 'react';
import Button from './common/button';

const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center sm:hidden mb-8 sticky top-0 bg-white py-3 px-8">
        <Button
          variant="link"
          onClick={() => {
            setOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>

        <Button variant="contained">Download Resume</Button>
      </div>

      <div
        className={`fixed h-full w-64 bg-gray-200 left-0 top-0 px-3 py-8 
          ${open ? '-translate-x-0' : '-translate-x-full'
          } sm:translate-x-0 transition-all duration-300`}
      >
        <div className="space-y-4 flex flex-col h-full">
          <Button
            variant="link"
            className="inline w-fit sm:hidden self-end"
            onClick={() => {
              setOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Button>

          {/* Avatar */}
          <img
            src={avatar}
            alt=""
            width={192}
            height={192}
            className="object-cover rounded-full w-[192px] h-[192px]"
          />
          <h1 className="text-3xl">Trần Thanh Mẫn</h1>
          <p>This is my blog for me</p>

          {/* Navigation */}
          <nav>
            <ul className="space-y-2">
              <li className="uppercase font-bold">
                <Link to="/">Home</Link>
              </li>
              <li className="uppercase font-bold">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex space-x-2">
            <a
              href="https://fb.com/kenlly.nguyn"
              className="w-7 opacity-75"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="media"
                src={facebook}
              />
            </a>
            <a
              href="https://linkedin.com/in/tranthanhman"
              className="w-7 opacity-75"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="media"
                src={linkedin}
              />
            </a>
            <a
              href="https://github.com/tranthanhman"
              className="w-7 opacity-75"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="media"
                src={github}
              />
            </a>
          </div>

          <Button
            variant="contained"
            className="!mt-auto"
          >
            <Link
              to={'https://tranthanhman.github.io'}
              target="_blank"
            >
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SideBar;

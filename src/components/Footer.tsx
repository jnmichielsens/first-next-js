export default function Footer() {
  return (
    <footer className='bg-gray-900 px-6 py-8 text-center text-white'>
      <p className='text-sm'>
        © {new Date().getFullYear()} Melange Traiteur. All rights reserved.
      </p>
    </footer>
  );
}

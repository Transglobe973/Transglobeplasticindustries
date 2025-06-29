import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff', display: 'flex', gap: '2rem' }}>
      <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link href="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link>
      <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
      <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link>
    </nav>
  );
}
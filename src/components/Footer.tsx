const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground text-xs text-center">
          © {new Date().getFullYear()} Abel A. Cárdenas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

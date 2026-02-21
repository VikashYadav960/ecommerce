function Footer() {
    return (
        <footer style={styles.footer}>

            <div style={styles.container}>

                {/* Brand Section */}
                <div>
                    <h2 style={styles.logo}>V-Store</h2>
                    <p style={styles.text}>
                        Premium React E-Commerce Website with modern UI.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4>Quick Links</h4>
                    <ul style={styles.list}>
                        <li>Home</li>



                        <li>Shop</li>
                        <li>Trending</li>
                        <li>Cart</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4>Contact</h4>
                    <ul style={styles.list}>
                        <li>Email: vikashyadav.fastarck@gmail.com</li>
                        <li>Phone: 9608564015</li>
                        <li>India</li>
                    </ul>
                </div>

            </div>

            <hr style={{ margin: "20px 0", borderColor: "#333" }} />

            <p style={styles.copy}>
                © 2026 V-Store | All Rights Reserved
            </p>

        </footer>
    );
}

const styles = {
    footer: {
        background: "#111",
        color: "#fff",
        padding: "40px 20px",
        marginTop: "40px"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "30px"
    },
    logo: {
        color: "#ff6b6b"
    },
    text: {
        maxWidth: "250px",
        color: "#ccc"
    },
    list: {
        listStyle: "none",
        padding: 0,
        lineHeight: "28px",
        color: "#ccc"
    },
    copy: {
        textAlign: "center",
        color: "#aaa"
    }
};

export default Footer;

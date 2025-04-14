@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
.body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    background: #f8f9fa;
    padding-top: 60px; 
}
.navbar {
    background: rgba(51, 51, 51, 0.9);
    color: white;
    padding: 15px 20px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000; 
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar .logo {
    font-size: 1.5em;
    font-weight: bold;
    margin-left: 20px;
}

.navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navbar ul li {
    margin: 0 15px;
}

.navbar ul li a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

.navbar ul li a:hover {
    color: #f4d35e;
}
section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
section.show {
    opacity: 1;
    transform: translateY(0);
}

#section1 {
    background: linear-gradient(to right, #415a77, #778da9);
    color: black;
}

#section2 {
    background: linear-gradient(to right, #e0e1dd, #778da9);
    color: black;
}
.btn {
    background: #f4d35e;
    color: black;
    padding: 12px 25px;
    font-size: 16px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    transition: all 0.3s ease-in-out;
}

.btn:hover {
    background: #ee964b;
    color: white;
    transform: scale(1.05);
}

.btn-alt {
    background: #415a77;
    color: white;
}

.btn-alt:hover {
    background: #0d3b66;
}
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        text-align: center;
        padding: 10px 0;
    }
    
    .navbar ul {
        flex-direction: column;
    }

    .navbar ul li {
        margin: 5px 0;
    }
}

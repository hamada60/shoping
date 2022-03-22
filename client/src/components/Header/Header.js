import React from 'react';
import '../../css/Header/Header.css';

export default function Header() {
  return (
    <div class="container-fluid">
      <header class="d-flex flex-wrap justify-content-center mb-4 rounded">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span class="fs-2">Shopping Cart</span>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item"><a href="#" class="nav-link text-white active" aria-current="page">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-white">About</a></li>
        </ul>
      </header>
    </div>
  )
}

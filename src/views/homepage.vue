<template>
  <div>
    <div
      class="py-1 px-3 px-md-5"
      style="
        background-color: #d9d9d9;
        height: 34px;
        padding: 3px 100px !important;
      "
    >
      <div
        class="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"
      >
        <div class="w-100 w-md-auto text-center text-md-start">
          <a
            class="text-danger fw-bold custom-underline"
            style="font-size: 14px"
          >
            Earn Rewards
          </a>
        </div>

        <div class="w-100 w-md-auto text-center text-md-end">
          <ul
            class="list-unstyled d-flex flex-wrap justify-content-center justify-content-md-end align-items-center mb-0 gap-2 gap-md-4"
          >
            <li class="dropdown">
              <a
                class="dropdown-toggle text-danger text-decoration-none"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style="font-weight: 500"
              >
                English
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item custom-dropdown-item text-muted"
                    href="#"
                    >English</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item custom-dropdown-item text-muted"
                    href="#"
                    >French</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item custom-dropdown-item text-muted"
                    href="#"
                    >Spanish</a
                  >
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#"
                class="text-decoration-none text-muted"
                style="font-weight: 500"
                >Gift Cards</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-decoration-none text-muted"
                style="font-weight: 550"
                >Blog</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-decoration-none text-muted"
                style="font-weight: 500"
                >Help</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white border-bottom px-3 py-3"
      style="
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        display: block;
        padding: 10px 100px !important;
      "
    >
      <div class="container-fluid">
        <!-- Brand -->
        <a
          class="navbar-brand fw-bold text-danger"
          href="#"
          @click="closeNavbar"
          style="font-size: 29px"
        >
          Rakuten Kobo
        </a>

        <!-- Toggler -->
        <button
          class="navbar-toggler bg-danger"
          type="button"
          @click="toggleNavbar"
          aria-label="Toggle navigation"
          style="
            background-color: #01c881;
            padding: 6px 10px;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
          "
          onmouseover="this.style.backgroundColor='#00b370'"
          onmouseout="this.style.backgroundColor='#01c881'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="40"
              d="M88 152h336M88 256h336M88 360h336"
            />
          </svg>
        </button>

        <!-- Navbar content -->
        <div
          class="collapse navbar-collapse mt-3 mt-lg-0"
          id="mainNavbar"
          ref="navbarCollapse"
        >
          <!-- Search input -->
          <form
            class="d-flex w-100 w-lg-auto mx-lg-4 mb-3 mb-lg-0"
            style="max-width: 400px"
          >
            <div class="input-group">
              <input
                type="text"
                class="form-control rounded-0"
                placeholder="Search on Kobo"
                aria-label="Search"
              />
              <button
                class="btn rounded-0"
                type="button"
                style="background-color: #313131; border-color: #313131"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M20.031 20.79c.46.46 1.17-.25.71-.7l-3.75-3.76a7.9 7.9 0 0 0 2.04-5.31c0-4.39-3.57-7.96-7.96-7.96s-7.96 3.57-7.96 7.96s3.57 7.96 7.96 7.96c1.98 0 3.81-.73 5.21-1.94zM4.11 11.02c0-3.84 3.13-6.96 6.96-6.96c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96c-3.83 0-6.96-3.12-6.96-6.96"
                  />
                </svg>
              </button>
            </div>
          </form>

          <!-- Nav icons and buttons -->
          <ul
            class="navbar-nav ms-auto d-flex align-items-center gap-3 flex-wrap"
          >
            <!-- Wishlist -->
            <li class="nav-item text-center">
              <a
                class="nav-link text-dark d-flex flex-column align-items-center"
                href="#"
              >
                <svg
                  style="color: gray !important"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#494848"
                    d="m278.574 20.672l-28.246 43.463c-36.452-29.484-87.944-38.624-127.96-30.428c-54.457 11.15-100.166 60.347-97.895 131.46c2.394 74.955 54.71 129.71 104.89 174.823c25.09 22.554 50.84 43.086 69.928 61.535c37.685 34.062 55.942 92.366 55.942 92.366s24.534-59.502 55.942-89.572c19.692-18.7 45.676-39.61 71.324-62.93c51.298-46.644 104.404-104.034 102.094-177.618c0-122.308-121.2-121.013-167.883-78.495c19.323-10.226 40.12-12.397 58.798-8.214c34.297 7.683 62.693 35.935 64.332 88.108c1.562 49.92-39.09 98.088-88.11 142.654c-24.508 22.28-49.752 42.445-71.324 62.93c-11.456 10.884-16.74 20.514-25.174 31.795c-8.437-11.983-13.663-22.066-25.173-33.192C174.715 306.4 86.784 238.475 83.27 163.77c-.72-62.22 72.103-78.604 111.246-51.04l-45.924 25.258c67.393 11.144 124.746 37.36 185.597 75.588L278.573 20.672z"
                  />
                </svg>
                <small>Wishlist</small>
              </a>
            </li>

            <!-- Cart -->
            <li class="nav-item text-center">
              <a
                class="nav-link text-dark d-flex flex-column align-items-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#494848"
                    d="M2.997 3.496a.5.5 0 0 1 .5-.5h.438c.727 0 1.145.473 1.387.945c.165.323.284.717.383 1.059H16a1 1 0 0 1 .962 1.272l-1.496 5.275A2 2 0 0 1 13.542 13H8.463a2 2 0 0 1-1.93-1.473l-.642-2.355l-.01-.032l-1.03-3.498l-.1-.337c-.1-.346-.188-.652-.32-.909c-.159-.31-.305-.4-.496-.4h-.438a.5.5 0 0 1-.5-.5M6.845 8.87l.653 2.396a1 1 0 0 0 .965.736h5.08a1 1 0 0 0 .961-.727L16 6H6zM10 15.499a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m6 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0"
                  />
                </svg>
                <small>Cart</small>
              </a>
            </li>

            <!-- Sign up / Sign in -->
            <li class="nav-item text-center">
              <button
                class="btn btn-danger text-white fw-semibold px-3 py-2 w-100"
                style="border-radius: 0; font-size: 14px"
              >
                Create account
              </button>
              <span class="d-block mt-1 text-muted" style="font-size: 13px">
                Have an account?
                <a href="#" class="text-danger fw-semibold">Sign in</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="container-fluid">
        <ul class="dropdowns-container" style="margin-top: 10px">
          <!-- eBOOKS -->
          <li class="custom-dropdown" style="list-style: none !important">
            <a
              href="#"
              @click="closeNavbar"
              style="font-size: 20px"
              class="nav-toggle no-bullets fw-normal"
              >eBOOKS <span class="arrow">&#9662;</span></a
            >
            <ul class="big-dropdown">
              <li><a href="#">Fiction & Literature</a></li>
              <li><a href="#">Romance</a></li>
              <li><a href="#">Nonfiction</a></li>
              <li><a href="#">Mystery & Suspense</a></li>
              <li><a href="#">Young Adult - YA</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Science Fiction & Fantasy</a></li>
              <li><a href="#">Biography & Memoir</a></li>
              <li><a href="#">Business & Finance</a></li>
              <li><a href="#">Comics, Graphic Novels, & Manga</a></li>
              <li><a href="#">Browse all categories</a></li>
              <li><a href="#">Recommended for You</a></li>
              <li><a href="#">Best Selling</a></li>
              <li><a href="#">eBook Deals</a></li>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Browse all eBooks</a></li>
            </ul>
          </li>

          <!-- AUDIOBOOKS -->
          <li class="custom-dropdown" style="list-style: none !important">
            <a
              href="#"
              @click="closeNavbar"
              style="font-size: 20px"
              class="nav-toggle fw-normal"
              >AUDIOBOOKS <span class="arrow">&#9662;</span></a
            >
            <ul class="big-dropdown">
              <li><a href="#">Fiction & Literature</a></li>
              <li><a href="#">Romance</a></li>
              <li><a href="#">Nonfiction</a></li>
              <li><a href="#">Mystery & Suspense</a></li>
              <li><a href="#">Young Adult - YA</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Science Fiction & Fantasy</a></li>
              <li><a href="#">Biography & Memoir</a></li>
              <li><a href="#">Business & Finance</a></li>
              <li><a href="#">Browse all categories</a></li>
              <li><a href="#">Best Selling</a></li>
              <li><a href="#">Audiobook Deals</a></li>
              <li><a href="#">From Screen to Audio</a></li>
              <li><a href="#">Browse all audiobooks</a></li>
            </ul>
          </li>

          <!-- eREADERS & APPS -->
          <li class="custom-dropdown" style="list-style: none !important">
            <a
              href="#"
              @click="closeNavbar"
              style="font-size: 20px"
              class="nav-toggle fw-normal"
              >eREADERS & APPS <span class="arrow">&#9662;</span></a
            >
            <ul class="big-dropdown">
              <li><strong>eReaders</strong></li>
              <li><a href="#">Kobo Clara BW</a></li>
              <li><a href="#">Kobo Clara Colour</a></li>
              <li><a href="#">Kobo Libra Colour</a></li>
              <li><a href="#">Kobo Sage</a></li>
              <li><a href="#">Kobo Elipsa 2E</a></li>
              <li><a href="#">All eReaders</a></li>
              <li><a href="#">Where to Buy</a></li>
              <li><strong>Apps</strong></li>
              <li><a href="#">Android</a></li>
              <li><a href="#">Apple</a></li>
              <li><a href="#">Kobo Desktop - Win | Mac</a></li>
              <li><a href="#">Learn more</a></li>
              <li><strong>Accessories</strong></li>
              <li><a href="#">View all</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container my-5">
      <button
        class="btn fw-bold"
        style="
          background-color: #007bff;
          color: white;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 4px;
        "
      >
        eBooks
      </button>

      <!-- Header -->
      <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
        <h4 class="hover-red-bold fw-semibold m-0">
          Best-selling and Popular eBooks
        </h4>
        <a
          href="#"
          style="
            color: black;
            font-weight: bold;
            text-decoration: underline;
            transition: color 0.2s;
          "
          onmouseover="this.style.color='red'"
          onmouseout="this.style.color='black'"
        >
          View all
        </a>
      </div>
      <div class="container my-5">
        <!-- Carousel -->
        <div id="ebookCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic1.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Kingdom of the Blind
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Louise Penny
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic2.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Sorceress Comes to Call
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $14.19</span
                          >
                          <span class="text-danger fw-bold ms-1"> $10.29</span>
                        </p>

                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic3.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11.5px">
                          What Moves the Dead ebook
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p
                          class="text-danger fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic4.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Silmarillion
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 11px">
                          J. R. R. Tolkien, J. R. R. Tolkien
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $21.89
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic5.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Liar ebook
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Nora Roberts
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.69
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic6.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Game of Thrones
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Rebecca Yarros
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.99
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1: Conversations with Friends -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/conversations.jpg"
                      class="card-img-top"
                      alt="Conversations with Friends"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11px">
                          Conversations with Friends
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Sally Rooney
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.59
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2: A Time for Mercy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/mercy.jpg"
                      class="card-img-top"
                      alt="A Time for Mercy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Time for Mercy
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          John Grisham
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3: The Enemy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/enemy.jpg"
                      class="card-img-top"
                      alt="The Enemy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Lee Child
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4: Strange Houses -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/strangehouses.jpg"
                      class="card-img-top"
                      alt="Strange Houses"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Strange Houses
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Uketsu
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $15.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5: The Wedding People -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/wedding.jpg"
                      class="card-img-top"
                      alt="The Wedding People"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Wedding People
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Alison Espach
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $20.49</span
                          >
                          <span class="text-danger fw-bold ms-1"> $11.49</span>
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6: The Book Thief -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/bookthief.jpg"
                      class="card-img-top"
                      alt="The Book Thief"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Book Thief
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Markus Zusak
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- More slides can be added similarly -->
          </div>

          <!-- Controls -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#ebookCarousel"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#ebookCarousel"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
      >
        <!-- optional text here -->
      </div>
    </div>
  </div>

























  <div class="container my-5">
    <button
      class="btn fw-bold"
      style="
        background-color: #007bff;
        color: white;
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 4px;
      "
    >
      eBooks
    </button>

    <!-- Header -->
    <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
      <h4 class="hover-red-bold fw-semibold m-0">
        New releases you don't want to miss
      </h4>
      <a
        href="#"
        style="
          color: black;
          font-weight: bold;
          text-decoration: underline;
          transition: color 0.2s;
        "
        onmouseover="this.style.color='red'"
        onmouseout="this.style.color='black'"
      >
        View all
      </a>
    </div>
    <div class="container my-5">
      <!-- Carousel -->
      <div id="e1bookCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic1.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Kingdom of the Blind
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Louise Penny
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic2.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Sorceress Comes to Call
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $14.19</span
                        >
                        <span class="text-danger fw-bold ms-1"> $10.29</span>
                      </p>

                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic3.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11.5px">
                        What Moves the Dead ebook
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p
                        class="text-danger fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic4.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Silmarillion
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 11px">
                        J. R. R. Tolkien, J. R. R. Tolkien
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $21.89
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic5.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Liar ebook
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Nora Roberts
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.69
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic6.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Game of Thrones
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Rebecca Yarros
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.99
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1: Conversations with Friends -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/conversations.jpg"
                    class="card-img-top"
                    alt="Conversations with Friends"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11px">
                        Conversations with Friends
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Sally Rooney
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.59
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2: A Time for Mercy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/mercy.jpg"
                    class="card-img-top"
                    alt="A Time for Mercy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Time for Mercy
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        John Grisham
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3: The Enemy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/enemy.jpg"
                    class="card-img-top"
                    alt="The Enemy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Lee Child
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4: Strange Houses -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/strangehouses.jpg"
                    class="card-img-top"
                    alt="Strange Houses"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Strange Houses
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Uketsu
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $15.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5: The Wedding People -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/wedding.jpg"
                    class="card-img-top"
                    alt="The Wedding People"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Wedding People
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Alison Espach
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $20.49</span
                        >
                        <span class="text-danger fw-bold ms-1"> $11.49</span>
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6: The Book Thief -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/bookthief.jpg"
                    class="card-img-top"
                    alt="The Book Thief"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Book Thief
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Markus Zusak
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- More slides can be added similarly -->
        </div>

        <!-- Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#e1bookCarousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#e1bookCarousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div
      style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
    >
      <!-- optional text here -->
    </div>
  </div>

















  <div class="container my-5 p-3">
  <h4 class=" mb-4">
    From Pulitzer Prize–winning author Elizabeth Strout
  </h4>

  <div class="row g-3">
    <!-- Left Section with Image -->
    <div class="col-12 col-md-4 d-flex align-items-center justify-content-center" 
         style="background-color: lightblue; height: 400px;">
      <img 
        src="/club1.jpg" 
        alt="Sample Image" 
        style="width: 50%; height: auto; transition: filter 0.3s ease; display: block; cursor:pointer;" 
        onmouseover="this.style.filter='brightness(85%)'" 
        onmouseout="this.style.filter='brightness(100%)'"
      >
    </div>

    <!-- Right Section with Book Info and Border -->
    <div class="col-12 col-md-8" 
         style="background-color: white; padding: 20px; height: 400px; overflow-y: auto; border: 1px solid #ccc;">
      <h2 class="fw-bold">Tell Me Everything: Oprah's Book Club</h2>

      <p class="mb-1" style="font-size: 13px; color: black">A Novel</p>

      <p class="text-muted" style="font-size: 15px">
        by
        <strong style="text-decoration: underline; cursor: pointer;">Elizabeth Strout</strong>
      </p>

      <div style="font-size: 22px; margin-top: -4px">
        <span class="text-danger">★</span>
        <span class="text-danger">★</span>
        <span class="text-danger">★</span>
        <span class="text-danger">★</span>
        <span style="color: #ccc">★</span>
        &nbsp;
        <a class="text-muted" style="font-size: 14px; text-decoration:none;">(331)</a>
      </div>

      

      <blockquote class="text-muted" style="font-size: 15px">
        NEW YORK TIMES BESTSELLER • OPRAH’S BOOK CLUB PICK • From Pulitzer
        <br />Prize–winning author Elizabeth Strout comes a “stunner”
        (<em>People</em>) of a novel about <br />
        new friendships, old loves, and the very human desire to leave a mark
        on the ....
      </blockquote>

      <p
        style="font-weight: bold; color: black; text-decoration: underline; cursor: pointer; font-size: 15px;">
        Read more
      </p>

      <p class="fw-bold mt-3" style="font-size: 30px; color: black">$13.19</p>
    </div>
  </div>
</div>






































<div class="container my-5">
    <button
      class="btn fw-bold"
      style="
        background-color: purple;
        color: white;
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 4px;
      "
    >
    Audiobooks
    </button>

    <!-- Header -->
    <div class="mt-2 mb-4">
  <!-- Header Row -->
  <div class="d-flex justify-content-between align-items-center">
    <h4 class="hover-red-bold fw-semibold m-0">
      New & Hot Audiobooks
    </h4>

    <a
      href="#"
      style="
        color: black;
        font-weight: bold;
        text-decoration: underline;
        transition: color 0.2s;
      "
      onmouseover="this.style.color='red'"
      onmouseout="this.style.color='black'"
    >
      View all
    </a>
  </div>

  <!-- Muted Subtext -->
  <p class="text-muted mt-2 mb-0" style="font-size: 16px;">
    Get your headphones ready. Here are the latest and greatest for your listening pleasure.
  </p>
</div>

    <div class="container my-5">
      <!-- Carousel -->
      <div id="e2bookCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic1.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                      
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Kingdom of the Blind
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Louise Penny
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic2.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Sorceress Comes to Call
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $14.19</span
                        >
                        <span class="text-danger fw-bold ms-1"> $10.29</span>
                      </p>

                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic3.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11.5px">
                        What Moves the Dead ebook
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p
                        class="text-danger fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic4.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Silmarillion
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 11px">
                        J. R. R. Tolkien, J. R. R. Tolkien
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $21.89
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic5.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Liar ebook
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Nora Roberts
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.69
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic6.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Game of Thrones
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Rebecca Yarros
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.99
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1: Conversations with Friends -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/conversations.jpg"
                    class="card-img-top"
                    alt="Conversations with Friends"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11px">
                        Conversations with Friends
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Sally Rooney
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.59
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2: A Time for Mercy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/mercy.jpg"
                    class="card-img-top"
                    alt="A Time for Mercy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Time for Mercy
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        John Grisham
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3: The Enemy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/enemy.jpg"
                    class="card-img-top"
                    alt="The Enemy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Lee Child
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4: Strange Houses -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/strangehouses.jpg"
                    class="card-img-top"
                    alt="Strange Houses"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Strange Houses
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Uketsu
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $15.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5: The Wedding People -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/wedding.jpg"
                    class="card-img-top"
                    alt="The Wedding People"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Wedding People
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Alison Espach
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $20.49</span
                        >
                        <span class="text-danger fw-bold ms-1"> $11.49</span>
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6: The Book Thief -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/bookthief.jpg"
                    class="card-img-top"
                    alt="The Book Thief"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Book Thief
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Markus Zusak
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- More slides can be added similarly -->
        </div>

        <!-- Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#e2bookCarousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#e2bookCarousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div
      style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
    >
      <!-- optional text here -->
    </div>
  </div>







































































  <div class="container my-5">
    <button
      class="btn fw-bold"
      style="
        background-color: purple;
        color: white;
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 4px;
      "
    >
    Audiobooks
    </button>

    <!-- Header -->
    <div class="mt-2 mb-4">
  <!-- Header Row -->
  <div class="d-flex justify-content-between align-items-center">
    <h4 class="hover-red-bold fw-semibold m-0">
      Start a new audiobook series
    </h4>

    <a
      href="#"
      style="
        color: black;
        font-weight: bold;
        text-decoration: underline;
        transition: color 0.2s;
      "
      onmouseover="this.style.color='red'"
      onmouseout="this.style.color='black'"
    >
      View all
    </a>
  </div>

  <!-- Muted Subtext -->
  <p class="text-muted mt-2 mb-0" style="font-size: 16px;">
    Get lost in a new series with these audiobooks full of cliff hangers, character arcs, and incredible twists and turns. 
  </p>
</div>

    <div class="container my-5">
      <!-- Carousel -->
      <div id="ebook3Carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic1.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                      
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Kingdom of the Blind
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Louise Penny
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic2.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Sorceress Comes to Call
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $14.19</span
                        >
                        <span class="text-danger fw-bold ms-1"> $10.29</span>
                      </p>

                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic3.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11.5px">
                        What Moves the Dead ebook
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p
                        class="text-danger fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic4.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Silmarillion
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 11px">
                        J. R. R. Tolkien, J. R. R. Tolkien
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $21.89
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic5.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Liar ebook
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Nora Roberts
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.69
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic6.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Game of Thrones
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Rebecca Yarros
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.99
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1: Conversations with Friends -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/conversations.jpg"
                    class="card-img-top"
                    alt="Conversations with Friends"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11px">
                        Conversations with Friends
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Sally Rooney
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.59
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2: A Time for Mercy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/mercy.jpg"
                    class="card-img-top"
                    alt="A Time for Mercy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Time for Mercy
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        John Grisham
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3: The Enemy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/enemy.jpg"
                    class="card-img-top"
                    alt="The Enemy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Lee Child
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4: Strange Houses -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/strangehouses.jpg"
                    class="card-img-top"
                    alt="Strange Houses"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Strange Houses
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Uketsu
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $15.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5: The Wedding People -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/wedding.jpg"
                    class="card-img-top"
                    alt="The Wedding People"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Wedding People
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Alison Espach
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $20.49</span
                        >
                        <span class="text-danger fw-bold ms-1"> $11.49</span>
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6: The Book Thief -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/bookthief.jpg"
                    class="card-img-top"
                    alt="The Book Thief"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Book Thief
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Markus Zusak
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- More slides can be added similarly -->
        </div>

        <!-- Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#ebook3Carousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#ebook3Carousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div
      style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
    >
      <!-- optional text here -->
    </div>
  </div>

















































  <div class="container my-5">
      <button
        class="btn fw-bold"
        style="
          background-color: #007bff;
          color: white;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 4px;
        "
      >
        eBooks
      </button>

      <!-- Header -->
      <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
        <h4 class="hover-red-bold fw-semibold m-0">
          Guaranteed chills and thrills with these mysteries and thrillers
        </h4>
        <a
          href="#"
          style="
            color: black;
            font-weight: bold;
            text-decoration: underline;
            transition: color 0.2s;
          "
          onmouseover="this.style.color='red'"
          onmouseout="this.style.color='black'"
        >
          View all
        </a>
      </div>
      <div class="container my-5">
        <!-- Carousel -->
        <div id="ebook5Carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic1.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Kingdom of the Blind
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Louise Penny
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic2.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Sorceress Comes to Call
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $14.19</span
                          >
                          <span class="text-danger fw-bold ms-1"> $10.29</span>
                        </p>

                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic3.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11.5px">
                          What Moves the Dead ebook
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p
                          class="text-danger fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic4.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Silmarillion
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 11px">
                          J. R. R. Tolkien, J. R. R. Tolkien
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $21.89
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic5.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Liar ebook
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Nora Roberts
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.69
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic6.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Game of Thrones
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Rebecca Yarros
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.99
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1: Conversations with Friends -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/conversations.jpg"
                      class="card-img-top"
                      alt="Conversations with Friends"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11px">
                          Conversations with Friends
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Sally Rooney
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.59
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2: A Time for Mercy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/mercy.jpg"
                      class="card-img-top"
                      alt="A Time for Mercy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Time for Mercy
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          John Grisham
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3: The Enemy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/enemy.jpg"
                      class="card-img-top"
                      alt="The Enemy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Lee Child
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4: Strange Houses -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/strangehouses.jpg"
                      class="card-img-top"
                      alt="Strange Houses"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Strange Houses
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Uketsu
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $15.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5: The Wedding People -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/wedding.jpg"
                      class="card-img-top"
                      alt="The Wedding People"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Wedding People
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Alison Espach
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $20.49</span
                          >
                          <span class="text-danger fw-bold ms-1"> $11.49</span>
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6: The Book Thief -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/bookthief.jpg"
                      class="card-img-top"
                      alt="The Book Thief"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Book Thief
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Markus Zusak
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- More slides can be added similarly -->
          </div>

          <!-- Controls -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#ebook5Carousel"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#ebook5Carousel"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
      >
        <!-- optional text here -->
      </div>
    </div>
  
























































    




  <div class="container my-5">
      <button
        class="btn fw-bold"
        style="
          background-color: #007bff;
          color: white;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 4px;
        "
      >
        eBooks
      </button>

      <!-- Header -->
      <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
        <h4 class="hover-red-bold fw-semibold m-0">
          Romantic reads to fall in love with
        </h4>
        <a
          href="#"
          style="
            color: black;
            font-weight: bold;
            text-decoration: underline;
            transition: color 0.2s;
          "
          onmouseover="this.style.color='red'"
          onmouseout="this.style.color='black'"
        >
          View all
        </a>
      </div>
      <div class="container my-5">
        <!-- Carousel -->
        <div id="ebook6Carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic1.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Kingdom of the Blind
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Louise Penny
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic2.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Sorceress Comes to Call
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $14.19</span
                          >
                          <span class="text-danger fw-bold ms-1"> $10.29</span>
                        </p>

                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic3.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11.5px">
                          What Moves the Dead ebook
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p
                          class="text-danger fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic4.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Silmarillion
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 11px">
                          J. R. R. Tolkien, J. R. R. Tolkien
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $21.89
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic5.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Liar ebook
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Nora Roberts
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.69
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic6.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Game of Thrones
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Rebecca Yarros
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.99
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1: Conversations with Friends -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/conversations.jpg"
                      class="card-img-top"
                      alt="Conversations with Friends"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11px">
                          Conversations with Friends
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Sally Rooney
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.59
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2: A Time for Mercy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/mercy.jpg"
                      class="card-img-top"
                      alt="A Time for Mercy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Time for Mercy
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          John Grisham
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3: The Enemy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/enemy.jpg"
                      class="card-img-top"
                      alt="The Enemy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Lee Child
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4: Strange Houses -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/strangehouses.jpg"
                      class="card-img-top"
                      alt="Strange Houses"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Strange Houses
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Uketsu
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $15.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5: The Wedding People -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/wedding.jpg"
                      class="card-img-top"
                      alt="The Wedding People"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Wedding People
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Alison Espach
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $20.49</span
                          >
                          <span class="text-danger fw-bold ms-1"> $11.49</span>
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6: The Book Thief -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/bookthief.jpg"
                      class="card-img-top"
                      alt="The Book Thief"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Book Thief
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Markus Zusak
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- More slides can be added similarly -->
          </div>

          <!-- Controls -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#ebook6Carousel"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#ebook6Carousel"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
      >
        <!-- optional text here -->
      </div>
    </div>
  















































    
    <div class="container my-5 p-3">
  <h4 class="mb-4">
    From the 2024 Nobel Prize in Literature winner Han Kang
  </h4>

  <!-- Hover box shadow wrapper -->
  <div class="row g-3 hover-card">
    <!-- Left Section -->
    <div class="col-12 col-md-4 d-flex align-items-center justify-content-center"
         style="background-color: lightpink; height: 400px;">
      <img 
        src="/club2.jpg" 
        alt="Greek Lessons Book Cover" 
        style="width: 45%; height: auto; transition: filter 0.3s ease; display: block; cursor: pointer;" 
        onmouseover="this.style.filter='brightness(85%)'" 
        onmouseout="this.style.filter='brightness(100%)'">
    </div>

    <!-- Right Section -->
    <div class="col-12 col-md-8"
         style="background-color: white; padding: 20px; height: 400px; overflow-y: auto; border: 1px solid #ccc;">
      <h2 class="fw-bold">Greek Lessons</h2>

      <p class="mb-1" style="font-size: 13px; color: black">Winner of the 2024 Nobel Prize in Literature</p>

      <p class="text-muted" style="font-size: 15px;">
        by <strong style="text-decoration: underline; cursor: pointer;">Han Kang</strong><br>
        Translated by <a style="text-decoration: underline; cursor: pointer;"> Deborah Smith </a>  &nbsp;   <a style="text-decoration: underline; cursor: pointer;"> e. yaewon </a>
      </p>

      <div style="font-size: 22px; margin-top: -8px">
        <span class="text-danger">★</span>
        <span class="text-danger">★</span>
        <span class="text-danger">★</span>
        <span class="text-danger">★</span>
        <span style="color: #ccc">★</span> &nbsp;
        <a class="text-muted" style="font-size: 14px; text-decoration:none;">(23)</a>
      </div>

      

      <blockquote class="text-muted" style="font-size: 18px">
        Book of the Year 2023 according to New Yorker, TIME magazine, Kirkus
        A <br> powerful novel of the saving grace of language and human connection, from the <br> Nobel Prize-winning author of The Vegetarian.
        ‘Breathtaking . . . She is simply my ...
      </blockquote>

      <p style="font-weight: bold; color: black; text-decoration: underline; cursor: pointer; font-size: 15px;">
        Read more
      </p>

      <p class="fw-bold mt-3" style="font-size: 30px; color: black">$6.89</p>
    </div>
  </div>
</div>















































<div class="container my-5">
      <button
        class="btn fw-bold"
        style="
          background-color: #007bff;
          color: white;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 4px;
        "
      >
        eBooks
      </button>

      <!-- Header -->
      <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
        <h4 class="hover-red-bold fw-semibold m-0">
          Kobo Originals, books you won't read anywhere else
        </h4>
        <a
          href="#"
          style="
            color: black;
            font-weight: bold;
            text-decoration: underline;
            transition: color 0.2s;
          "
          onmouseover="this.style.color='red'"
          onmouseout="this.style.color='black'"
        >
          View all
        </a>
      </div>
      <div class="container my-5">
        <!-- Carousel -->
        <div id="ebook7Carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic1.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Kingdom of the Blind
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Louise Penny
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic2.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Sorceress Comes to Call
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $14.19</span
                          >
                          <span class="text-danger fw-bold ms-1"> $10.29</span>
                        </p>

                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic3.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11.5px">
                          What Moves the Dead ebook
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p
                          class="text-danger fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic4.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Silmarillion
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 11px">
                          J. R. R. Tolkien, J. R. R. Tolkien
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $21.89
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic5.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Liar ebook
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Nora Roberts
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.69
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic6.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Game of Thrones
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Rebecca Yarros
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.99
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1: Conversations with Friends -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/conversations.jpg"
                      class="card-img-top"
                      alt="Conversations with Friends"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11px">
                          Conversations with Friends
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Sally Rooney
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.59
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2: A Time for Mercy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/mercy.jpg"
                      class="card-img-top"
                      alt="A Time for Mercy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Time for Mercy
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          John Grisham
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3: The Enemy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/enemy.jpg"
                      class="card-img-top"
                      alt="The Enemy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Lee Child
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4: Strange Houses -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/strangehouses.jpg"
                      class="card-img-top"
                      alt="Strange Houses"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Strange Houses
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Uketsu
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $15.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5: The Wedding People -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/wedding.jpg"
                      class="card-img-top"
                      alt="The Wedding People"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Wedding People
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Alison Espach
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $20.49</span
                          >
                          <span class="text-danger fw-bold ms-1"> $11.49</span>
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6: The Book Thief -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/bookthief.jpg"
                      class="card-img-top"
                      alt="The Book Thief"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Book Thief
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Markus Zusak
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- More slides can be added similarly -->
          </div>

          <!-- Controls -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#ebook7Carousel"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#ebook7Carousel"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
      >
        <!-- optional text here -->
      </div>
    </div>








































































    


<div class="container my-5">
      <button
        class="btn fw-bold"
        style="
          background-color: #007bff;
          color: white;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 4px;
        "
      >
        eBooks
      </button>

      <!-- Header -->
      <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
        <h4 class="hover-red-bold fw-semibold m-0">
          Page-turners you won't be able to put down
        </h4>
        <a
          href="#"
          style="
            color: black;
            font-weight: bold;
            text-decoration: underline;
            transition: color 0.2s;
          "
          onmouseover="this.style.color='red'"
          onmouseout="this.style.color='black'"
        >
          View all
        </a>
      </div>
      <div class="container my-5">
        <!-- Carousel -->
        <div id="ebook8Carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic1.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Kingdom of the Blind
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Louise Penny
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic2.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Sorceress Comes to Call
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $14.19</span
                          >
                          <span class="text-danger fw-bold ms-1"> $10.29</span>
                        </p>

                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic3.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11.5px">
                          What Moves the Dead ebook
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p
                          class="text-danger fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic4.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Silmarillion
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 11px">
                          J. R. R. Tolkien, J. R. R. Tolkien
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $21.89
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic5.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Liar ebook
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Nora Roberts
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.69
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic6.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Game of Thrones
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Rebecca Yarros
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.99
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1: Conversations with Friends -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/conversations.jpg"
                      class="card-img-top"
                      alt="Conversations with Friends"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11px">
                          Conversations with Friends
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Sally Rooney
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.59
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2: A Time for Mercy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/mercy.jpg"
                      class="card-img-top"
                      alt="A Time for Mercy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Time for Mercy
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          John Grisham
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3: The Enemy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/enemy.jpg"
                      class="card-img-top"
                      alt="The Enemy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Lee Child
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4: Strange Houses -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/strangehouses.jpg"
                      class="card-img-top"
                      alt="Strange Houses"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Strange Houses
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Uketsu
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $15.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5: The Wedding People -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/wedding.jpg"
                      class="card-img-top"
                      alt="The Wedding People"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Wedding People
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Alison Espach
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $20.49</span
                          >
                          <span class="text-danger fw-bold ms-1"> $11.49</span>
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6: The Book Thief -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/bookthief.jpg"
                      class="card-img-top"
                      alt="The Book Thief"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Book Thief
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Markus Zusak
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- More slides can be added similarly -->
          </div>

          <!-- Controls -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#ebook8Carousel"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#ebook8Carousel"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
      >
        <!-- optional text here -->
      </div>
    </div>






















    













































    
    


<div class="container my-5">
      <button
        class="btn fw-bold"
        style="
          background-color: #007bff;
          color: white;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 4px;
        "
      >
        eBooks
      </button>

      <!-- Header -->
      <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
        <h4 class="hover-red-bold fw-semibold m-0">
          Nonfiction reads
        </h4>
        <a
          href="#"
          style="
            color: black;
            font-weight: bold;
            text-decoration: underline;
            transition: color 0.2s;
          "
          onmouseover="this.style.color='red'"
          onmouseout="this.style.color='black'"
        >
          View all
        </a>
      </div>
      <div class="container my-5">
        <!-- Carousel -->
        <div id="ebook9Carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic1.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Kingdom of the Blind
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Louise Penny
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic2.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Sorceress Comes to Call
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $14.19</span
                          >
                          <span class="text-danger fw-bold ms-1"> $10.29</span>
                        </p>

                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic3.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11.5px">
                          What Moves the Dead ebook
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p
                          class="text-danger fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic4.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Silmarillion
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 11px">
                          J. R. R. Tolkien, J. R. R. Tolkien
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $21.89
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic5.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Liar ebook
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Nora Roberts
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.69
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic6.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Game of Thrones
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Rebecca Yarros
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.99
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1: Conversations with Friends -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/conversations.jpg"
                      class="card-img-top"
                      alt="Conversations with Friends"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11px">
                          Conversations with Friends
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Sally Rooney
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.59
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2: A Time for Mercy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/mercy.jpg"
                      class="card-img-top"
                      alt="A Time for Mercy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Time for Mercy
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          John Grisham
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3: The Enemy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/enemy.jpg"
                      class="card-img-top"
                      alt="The Enemy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Lee Child
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4: Strange Houses -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/strangehouses.jpg"
                      class="card-img-top"
                      alt="Strange Houses"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Strange Houses
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Uketsu
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $15.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5: The Wedding People -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/wedding.jpg"
                      class="card-img-top"
                      alt="The Wedding People"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Wedding People
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Alison Espach
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $20.49</span
                          >
                          <span class="text-danger fw-bold ms-1"> $11.49</span>
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6: The Book Thief -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/bookthief.jpg"
                      class="card-img-top"
                      alt="The Book Thief"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Book Thief
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Markus Zusak
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- More slides can be added similarly -->
          </div>

          <!-- Controls -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#ebook9Carousel"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#ebook9Carousel"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
      >
        <!-- optional text here -->
      </div>
    </div>




































































    <div class="container my-5 p-3">
  <h4 class="mb-4">
    A tale of magic and intrigue
  </h4>

  <div class="row g-3">
    <!-- Left Section with Image -->
    <div class="col-12 col-md-4 d-flex align-items-center justify-content-center" 
         style="background-color: lightblue; height: 400px;">
      <img 
        src="/club3.jpg" 
        alt="The Familiar Cover" 
        style="width: 50%; height: auto; transition: filter 0.3s ease; display: block; cursor: pointer;" 
        onmouseover="this.style.filter='brightness(85%)'" 
        onmouseout="this.style.filter='brightness(100%)'"
      >
    </div>

    <!-- Right Section with Book Info -->
    <div class="col-12 col-md-8" 
         style="background-color: white; padding: 20px; height: 400px; overflow-y: auto; border: 1px solid #ccc;">
      <h2 class="fw-bold">The Familiar</h2>

      <p class="mb-1 text-muted tw-bold" style="font-size: 15px; color: black">
        The richly imagined, spellbinding new Sunday Times bestselling novel from the author of <br> Ninth House
      </p>

      <p class="text-muted" style="font-size: 15px;">
        by <strong style="text-decoration: underline; cursor: pointer;">Leigh Bardugo</strong>
      </p>

      <div style="font-size: 22px; margin-top: -4px">
        <span class="text-danger">★</span>
        <span class="text-danger">★</span>
        <span class="text-danger">★</span>
        <span class="text-danger">★</span>
        <span style="color: #ccc">★</span>
        &nbsp;
        <a class="text-muted" style="font-size: 14px; text-decoration: none;">(31)</a>
      </div>

      <blockquote class="text-muted mt-2" style="font-size: 15px">
        AN INSTANT SUNDAY TIMES BESTSELLER 
        ‘A richly imagined, intricate tale of <br> magic and intrigue’ — Deborah Harkness, #1 bestselling author of A Discovery<br> of Witches
        ‘Riveting… Leigh Bardugo's characters are so three dimensional you ...
      </blockquote>

      <p
        style="font-weight: bold; color: black; text-decoration: underline; cursor: pointer; font-size: 15px;">
        Read more
      </p>

      <p class="fw-bold mt-3" style="font-size: 30px; color: black">$6.79</p>
    </div>
  </div>
</div>

































































































<div class="container my-5">
    <button
      class="btn fw-bold"
      style="
        background-color: purple;
        color: white;
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 4px;
      "
    >
    Audiobooks
    </button>

    <!-- Header -->
    <div class="mt-2 mb-4">
  <!-- Header Row -->
  <div class="d-flex justify-content-between align-items-center">
    <h4 class="hover-red-bold fw-semibold m-0">
      Better life, better you
    </h4>

    <a
      href="#"
      style="
        color: black;
        font-weight: bold;
        text-decoration: underline;
        transition: color 0.2s;
      "
      onmouseover="this.style.color='red'"
      onmouseout="this.style.color='black'"
    >
      View all
    </a>
  </div>

  <!-- Muted Subtext -->
  <p class="text-muted mt-2 mb-0" style="font-size: 16px;">
    Boost your self-esteem with these self-help audiobooks designed to show you how to redefine your life. Choose an audiobook to<br> start listening and reinventing.
  </p>
</div>

    <div class="container my-5">
      <!-- Carousel -->
      <div id="ebook10Carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic1.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                      
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Kingdom of the Blind
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Louise Penny
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic2.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Sorceress Comes to Call
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $14.19</span
                        >
                        <span class="text-danger fw-bold ms-1"> $10.29</span>
                      </p>

                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic3.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11.5px">
                        What Moves the Dead ebook
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p
                        class="text-danger fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic4.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Silmarillion
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 11px">
                        J. R. R. Tolkien, J. R. R. Tolkien
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $21.89
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic5.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Liar ebook
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Nora Roberts
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.69
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic6.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Game of Thrones
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Rebecca Yarros
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.99
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1: Conversations with Friends -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/conversations.jpg"
                    class="card-img-top"
                    alt="Conversations with Friends"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11px">
                        Conversations with Friends
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Sally Rooney
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.59
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2: A Time for Mercy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/mercy.jpg"
                    class="card-img-top"
                    alt="A Time for Mercy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Time for Mercy
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        John Grisham
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3: The Enemy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/enemy.jpg"
                    class="card-img-top"
                    alt="The Enemy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Lee Child
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4: Strange Houses -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/strangehouses.jpg"
                    class="card-img-top"
                    alt="Strange Houses"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Strange Houses
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Uketsu
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $15.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5: The Wedding People -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/wedding.jpg"
                    class="card-img-top"
                    alt="The Wedding People"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Wedding People
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Alison Espach
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $20.49</span
                        >
                        <span class="text-danger fw-bold ms-1"> $11.49</span>
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6: The Book Thief -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/bookthief.jpg"
                    class="card-img-top"
                    alt="The Book Thief"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Book Thief
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Markus Zusak
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- More slides can be added similarly -->
        </div>

        <!-- Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#ebook10Carousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#ebook10Carousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div
      style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
    >
      <!-- optional text here -->
    </div>
  </div>




























  <div class="container my-5">
      <button
        class="btn fw-bold"
        style="
          background-color: #007bff;
          color: white;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 4px;
        "
      >
        eBooks
      </button>

      <!-- Header -->
      <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
        <h4 class="hover-red-bold fw-semibold m-0">
          Pre-order these titles now
        </h4>
        <a
          href="#"
          style="
            color: black;
            font-weight: bold;
            text-decoration: underline;
            transition: color 0.2s;
          "
          onmouseover="this.style.color='red'"
          onmouseout="this.style.color='black'"
        >
          View all
        </a>
      </div>
      <div class="container my-5">
        <!-- Carousel -->
        <div id="ebook11Carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic1.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Kingdom of the Blind
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Louise Penny
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic2.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Sorceress Comes to Call
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $14.19</span
                          >
                          <span class="text-danger fw-bold ms-1"> $10.29</span>
                        </p>

                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic3.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11.5px">
                          What Moves the Dead ebook
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p
                          class="text-danger fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic4.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Silmarillion
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 11px">
                          J. R. R. Tolkien, J. R. R. Tolkien
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $21.89
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic5.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Liar ebook
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Nora Roberts
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.69
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic6.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Game of Thrones
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Rebecca Yarros
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.99
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1: Conversations with Friends -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/conversations.jpg"
                      class="card-img-top"
                      alt="Conversations with Friends"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11px">
                          Conversations with Friends
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Sally Rooney
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.59
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2: A Time for Mercy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/mercy.jpg"
                      class="card-img-top"
                      alt="A Time for Mercy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Time for Mercy
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          John Grisham
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3: The Enemy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/enemy.jpg"
                      class="card-img-top"
                      alt="The Enemy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Lee Child
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4: Strange Houses -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/strangehouses.jpg"
                      class="card-img-top"
                      alt="Strange Houses"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Strange Houses
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Uketsu
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $15.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5: The Wedding People -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/wedding.jpg"
                      class="card-img-top"
                      alt="The Wedding People"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Wedding People
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Alison Espach
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $20.49</span
                          >
                          <span class="text-danger fw-bold ms-1"> $11.49</span>
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6: The Book Thief -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/bookthief.jpg"
                      class="card-img-top"
                      alt="The Book Thief"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Book Thief
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Markus Zusak
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- More slides can be added similarly -->
          </div>

          <!-- Controls -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#ebook11Carousel"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#ebook11Carousel"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
      >
        <!-- optional text here -->
      </div>
    </div>





























    <div class="container my-5">
    <button
      class="btn fw-bold"
      style="
        background-color: purple;
        color: white;
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 4px;
      "
    >
    Audiobooks
    </button>

    <!-- Header -->
    <div class="mt-2 mb-4">
  <!-- Header Row -->
  <div class="d-flex justify-content-between align-items-center">
    <h4 class="hover-red-bold fw-semibold m-0">
      Language learning audiobooks
    </h4>

    <a
      href="#"
      style="
        color: black;
        font-weight: bold;
        text-decoration: underline;
        transition: color 0.2s;
      "
      onmouseover="this.style.color='red'"
      onmouseout="this.style.color='black'"
    >
      View all
    </a>
  </div>

  <!-- Muted Subtext -->
  <p class="text-muted mt-2 mb-0" style="font-size: 16px;">
    Been wanting to learn a new language for years but never had the time? These audiobooks can teach you wherever you are! 
  </p>
</div>

    <div class="container my-5">
      <!-- Carousel -->
      <div id="ebook12Carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic1.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                      
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Kingdom of the Blind
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Louise Penny
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic2.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Sorceress Comes to Call
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $14.19</span
                        >
                        <span class="text-danger fw-bold ms-1"> $10.29</span>
                      </p>

                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic3.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11.5px">
                        What Moves the Dead ebook
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        T. Kingfisher
                      </h5>
                      <p
                        class="text-danger fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic4.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Silmarillion
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 11px">
                        J. R. R. Tolkien, J. R. R. Tolkien
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $21.89
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic5.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Liar ebook
                      </h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Nora Roberts
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.69
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6 -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/pic6.jpg"
                    class="card-img-top"
                    alt="Book Cover"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-top-left-radius: 0.375rem;
                      border-top-right-radius: 0.375rem;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Game of Thrones
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Rebecca Yarros
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.99
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
              <!-- Book 1: Conversations with Friends -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/conversations.jpg"
                    class="card-img-top"
                    alt="Conversations with Friends"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 11px">
                        Conversations with Friends
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Sally Rooney
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $9.59
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px; margin-top: 50px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 2: A Time for Mercy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/mercy.jpg"
                    class="card-img-top"
                    alt="A Time for Mercy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        A Time for Mercy
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        John Grisham
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 3: The Enemy -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/enemy.jpg"
                    class="card-img-top"
                    alt="The Enemy"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                      <h5 class="text-muted mb-2" style="font-size: 14px">
                        Lee Child
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $8.49
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 4: Strange Houses -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/strangehouses.jpg"
                    class="card-img-top"
                    alt="Strange Houses"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        Strange Houses
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Uketsu
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $15.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 5: The Wedding People -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/wedding.jpg"
                    class="card-img-top"
                    alt="The Wedding People"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Wedding People
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Alison Espach
                      </h5>
                      <p class="mb-2" style="font-size: 13px">
                        <span
                          class="text-muted"
                          style="text-decoration: line-through"
                        >
                          $20.49</span
                        >
                        <span class="text-danger fw-bold ms-1"> $11.49</span>
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <!-- Book 6: The Book Thief -->
              <div class="col">
                <div
                  class="card h-100 border-0 shadow-sm mx-auto"
                  style="max-width: 180px"
                >
                  <img
                    src="/public/bookthief.jpg"
                    class="card-img-top"
                    alt="The Book Thief"
                    style="
                      width: 100%;
                      height: 240px;
                      object-fit: cover;
                      border-radius: 0.375rem 0.375rem 0 0;
                    "
                  />
                  <div
                    class="card-body d-flex flex-column justify-content-between p-2"
                  >
                    <div>
                      <h6 class="mb-1" style="font-size: 13px">
                        The Book Thief
                      </h6>
                      <h5 class="mb-2 text-muted" style="font-size: 14px">
                        Markus Zusak
                      </h5>
                      <p
                        class="text-success fw-bold mb-2"
                        style="font-size: 13px"
                      >
                        $10.29
                      </p>
                      <div style="font-size: 22px; margin-top: -4px">
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>
                        <span class="text-danger">★</span>

                        <!-- Half Star -->
                        <span
                          style="
                            display: inline-block;
                            position: relative;
                            color: #ccc;
                          "
                        >
                          <span
                            class="text-danger"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 50%;
                            "
                            >★</span
                          >
                          ★
                        </span>

                        <span style="color: #ccc">★</span>
                      </div>
                    </div>
                    <button
                      class="btn custom-cart-btn fw-semibold px-3 py-1"
                      style="font-size: 13px"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- More slides can be added similarly -->
        </div>

        <!-- Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#ebook12Carousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#ebook12Carousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div
      style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
    >
      <!-- optional text here -->
    </div>
  </div>





















































  <div class="container my-5">
      <button
        class="btn fw-bold"
        style="
          background-color: #007bff;
          color: white;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 4px;
        "
      >
        eBooks
      </button>

      <!-- Header -->
      <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
        <h4 class="hover-red-bold fw-semibold m-0">
          Dictionaries and tools to help with language learning
        </h4>
        <a
          href="#"
          style="
            color: black;
            font-weight: bold;
            text-decoration: underline;
            transition: color 0.2s;
          "
          onmouseover="this.style.color='red'"
          onmouseout="this.style.color='black'"
        >
          View all
        </a>
      </div>
      <div class="container my-5">
        <!-- Carousel -->
        <div id="ebook13Carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic1.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Kingdom of the Blind
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Louise Penny
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic2.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Sorceress Comes to Call
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $14.19</span
                          >
                          <span class="text-danger fw-bold ms-1"> $10.29</span>
                        </p>

                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic3.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11.5px">
                          What Moves the Dead ebook
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          T. Kingfisher
                        </h5>
                        <p
                          class="text-danger fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic4.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Silmarillion
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 11px">
                          J. R. R. Tolkien, J. R. R. Tolkien
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $21.89
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic5.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Liar ebook
                        </h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Nora Roberts
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.69
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6 -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/pic6.jpg"
                      class="card-img-top"
                      alt="Book Cover"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-top-left-radius: 0.375rem;
                        border-top-right-radius: 0.375rem;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Game of Thrones
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Rebecca Yarros
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.99
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                <!-- Book 1: Conversations with Friends -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/conversations.jpg"
                      class="card-img-top"
                      alt="Conversations with Friends"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 11px">
                          Conversations with Friends
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Sally Rooney
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $9.59
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px; margin-top: 50px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 2: A Time for Mercy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/mercy.jpg"
                      class="card-img-top"
                      alt="A Time for Mercy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          A Time for Mercy
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          John Grisham
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 3: The Enemy -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/enemy.jpg"
                      class="card-img-top"
                      alt="The Enemy"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">The Enemy</h6>
                        <h5 class="text-muted mb-2" style="font-size: 14px">
                          Lee Child
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $8.49
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 4: Strange Houses -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/strangehouses.jpg"
                      class="card-img-top"
                      alt="Strange Houses"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          Strange Houses
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Uketsu
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $15.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 5: The Wedding People -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/wedding.jpg"
                      class="card-img-top"
                      alt="The Wedding People"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Wedding People
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Alison Espach
                        </h5>
                        <p class="mb-2" style="font-size: 13px">
                          <span
                            class="text-muted"
                            style="text-decoration: line-through"
                          >
                            $20.49</span
                          >
                          <span class="text-danger fw-bold ms-1"> $11.49</span>
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Book 6: The Book Thief -->
                <div class="col">
                  <div
                    class="card h-100 border-0 shadow-sm mx-auto"
                    style="max-width: 180px"
                  >
                    <img
                      src="/public/bookthief.jpg"
                      class="card-img-top"
                      alt="The Book Thief"
                      style="
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                        border-radius: 0.375rem 0.375rem 0 0;
                      "
                    />
                    <div
                      class="card-body d-flex flex-column justify-content-between p-2"
                    >
                      <div>
                        <h6 class="mb-1" style="font-size: 13px">
                          The Book Thief
                        </h6>
                        <h5 class="mb-2 text-muted" style="font-size: 14px">
                          Markus Zusak
                        </h5>
                        <p
                          class="text-success fw-bold mb-2"
                          style="font-size: 13px"
                        >
                          $10.29
                        </p>
                        <div style="font-size: 22px; margin-top: -4px">
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>
                          <span class="text-danger">★</span>

                          <!-- Half Star -->
                          <span
                            style="
                              display: inline-block;
                              position: relative;
                              color: #ccc;
                            "
                          >
                            <span
                              class="text-danger"
                              style="
                                position: absolute;
                                overflow: hidden;
                                width: 50%;
                              "
                              >★</span
                            >
                            ★
                          </span>

                          <span style="color: #ccc">★</span>
                        </div>
                      </div>
                      <button
                        class="btn custom-cart-btn fw-semibold px-3 py-1"
                        style="font-size: 13px"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- More slides can be added similarly -->
          </div>

          <!-- Controls -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#ebook13Carousel"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#ebook13Carousel"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
      >
        <!-- optional text here -->
      </div>
    </div>





































































































































    <div class="bg-secondary text-white py-5 mt-5">
  <div class="container">
    <div class="row">
      <!-- First Column -->
      <div class="col-12 col-md-3 mb-4">
        <h5 class="mb-3 text-decoration-underline">All about Rakuten Kobo</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">About Rakuten Kobo</a></li>
          <li><a href="#" class="text-white text-decoration-none">Management Team</a></li>
          <li><a href="#" class="text-white text-decoration-none">Kobo in Conversation Podcast</a></li>
          <li><a href="#" class="text-white text-decoration-none">eRecycling Program</a></li>
          <li><a href="#" class="text-white text-decoration-none">Free Apps</a></li>
          <li><a href="#" class="text-white text-decoration-none">Buy eGift Cards</a></li>
          <li><a href="#" class="text-white text-decoration-none">Get Help</a></li>
          <li><a href="#" class="text-white text-decoration-none">Sitemap</a></li>
        </ul>
      </div>

      <!-- Second Column -->
      <div class="col-12 col-md-3 mb-4">
        <h5 class="mb-3 text-decoration-underline">Opportunities</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">Self Publish</a></li>
          <li><a href="#" class="text-white text-decoration-none">Affiliates</a></li>
          <li><a href="#" class="text-white text-decoration-none">Job Openings</a></li>
        </ul>
      </div>

      <!-- Third Column -->
      <div class="col-12 col-md-3 mb-4">
        <h5 class="mb-3 text-decoration-underline">Latest Blog Posts</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">The best books Kobo read in July 2025</a></li>
          <li><a href="#" class="text-white text-decoration-none">Permission to read: check out BTS' favourite b...</a></li>
          <li><a href="#" class="text-white text-decoration-none">85 new books coming out July 29 – August 11, 2025</a></li>
          <li><a href="#" class="text-white text-decoration-none">Mystery novels you can read in a day</a></li>
          <li><a href="#" class="text-white text-decoration-none">Wally Lamb waded into autobiography for The Ri...</a></li>
          <li><a href="#" class="text-white text-decoration-underline">View all posts</a></li>
        </ul>
      </div>

      <!-- Fourth Column -->
      <div class="col-12 col-md-3 mb-4">
        <h5 class="mb-3 text-decoration-underline">Stay Connected</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">Facebook</a></li>
          <li><a href="#" class="text-white text-decoration-none">Twitter</a></li>
          <li><a href="#" class="text-white text-decoration-none">Pinterest</a></li>
          <li><a href="#" class="text-white text-decoration-none">YouTube</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  mounted() {
    const navbarEl = document.getElementById("mainNavbar");
    this.bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarEl);

    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleNavbar() {
      this.bsCollapse.toggle();
    },
    closeNavbar() {
      if (
        this.bsCollapse &&
        this.$refs.navbarCollapse.classList.contains("show")
      ) {
        this.bsCollapse.hide();
      }
    },
    handleClickOutside(event) {
      const navbar = this.$refs.navbarCollapse;
      if (
        navbar &&
        navbar.classList.contains("show") &&
        !navbar.contains(event.target) &&
        !event.target.closest(".navbar-toggler")
      ) {
        this.bsCollapse.hide();
      }
    },
  },
};
</script>

<style scoped>


.hover-card {
    transition: box-shadow 0.3s ease;
  }

  .hover-card:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  .hover-card:hover .col-md-8 {
    border: none !important;
  }

.custom-cart-btn {
  background-color: var(--bs-secondary);
  color: white;
  border: none !important;
  transition: all 0.2s ease;
}

.custom-cart-btn:hover {
  background-color: white;
  color: var(--bs-secondary);
  border: none !important;
}

.hover-red-bold {
  font-weight: bold;

  color: black;
  transition: color 0.2s ease;
  cursor: pointer;
}
.hover-red-bold:hover {
  color: red;
}

.navbar-toggler:focus {
  box-shadow: none !important;
  outline: none !important;
}

.dropdowns-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 0;
}

.custom-dropdown {
  position: relative;
}

.nav-toggle {
  color: black;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  list-style: none;
}

.arrow {
  margin-left: 5px;
  transition: transform 0.3s ease, color 0.3s ease;
}

/* Hover effect */
.custom-dropdown:hover .nav-toggle,
.custom-dropdown:hover .arrow {
  color: red;
}

.custom-dropdown:hover .arrow {
  transform: rotate(180deg);
}
.big-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  display: none; /* hidden by default */
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 10px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  list-style: none;
  min-width: 360px;
  max-width: 600px;
  font-size: 14px;
  word-wrap: break-word;
}

.custom-dropdown:hover .big-dropdown {
  display: grid;
}

.big-dropdown li {
  list-style: none;
}

.big-dropdown a {
  display: block;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: #f1f1f1;
  color: #333;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  white-space: normal; /* force text to wrap */
  word-break: break-word; /* break long words */
  text-align: left;
}

.big-dropdown a:hover {
  background-color: #dc3545;
  color: white;
}

@media (max-width: 752px) {
  .big-dropdown {
    display: none !important;
  }
  .custom-dropdown:hover .nav-toggle,
  .custom-dropdown:hover .arrow {
    color: black !important;
  }
  .arrow {
    display: none !important;
  }
}

/* Show dropdown on hover */
.custom-dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0.5rem;
}

/* Style dropdown menu */
.big-dropdown {
  min-width: 100%;
  max-width: 500px;
  columns: 2;
  padding: 20px;
  display: none; /* Hidden by default */
  position: absolute;
  background-color: white;
  border: 1px solid #dee2e6;
  z-index: 1000;
}

/* Responsive: stack columns on mobile */
@media (max-width: 576px) {
  .big-dropdown {
    columns: 1;
    width: 100%;
  }
}

/* Turn toggle red and rotate arrow */
.custom-dropdown:hover .nav-toggle {
  color: red;
}

.custom-dropdown:hover .arrow {
  transform: rotate(180deg);
  color: red;
}

/* Arrow styling */
.arrow {
  margin-left: 6px;
  transition: transform 0.3s ease;
}

.custom-dropdown-item {
  font-size: 12px;
}

.custom-dropdown-item:hover {
  color: red !important; /* Change to green on hover */
  background-color: #f8f9fa; /* Optional: lighter background on hover */
}
.custom-underline {
  position: relative;
  text-decoration: none;
}

.custom-underline:hover {
  text-decoration: underline;
  color: green !important;
  font-weight: small !important;
}
</style>

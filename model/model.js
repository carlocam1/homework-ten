var MODEL = (function(){
    var homeContent = `<div class="home">
    <section class="hero">
      <div class="hero-image">
        <div class="callout">
          <h1>travel-fly</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, sunt saepe reiciendis consequatur totam .
          </p>
          <div class="learn-more">READ MORE</div>
        </div>
      </div>
    </section>
    <section class="promo-trips">
      <div class="trips-container">
        <div class="trip-image">
          <div class="trip-picture"></div>
          <div class="trip-callout">
            <h1>israel</h1>
            <p>from $ 1000</p>
            <div class="more">LEARN MORE</div>
          </div>
        </div>
        <div class="trip-image2">
          <div class="trip-callout">
            <h1>usa</h1>
            <p>from $ 1500</p>
            <div class="more">LEARN MORE</div>
          </div>
        </div>
        <div class="trip-image3">
          <div class="trip-callout">
            <h1>australia</h1>
            <p>from $ 1800</p>
            <div class="more">LEARN MORE</div>
          </div>
        </div>
      </div>
    </section>
    <section class="booking">
      <div class="booking-wrapper">
        <h1>Booking Form</h1>
        <div class="input-labels">
          <div class="first">
            <input type="text" placeholder="name..." />
          </div>
          <div class="second">
            <input type="text" placeholder="email..." />
          </div>
        </div>
        <div class="input-labels">
          <div class="first">
            <input type="text" placeholder="country..." />
          </div>
          <div class="second">
            <input type="text" placeholder="hotel..." />
          </div>
        </div>

        <div class="long-input">
          <div class="icon-image">
            <img src="images/home/calendar.svg" alt="" />
          </div>
          <label for="Check-in">Check-in</label>
          <input type="text" placeholder="01/10/2022" />
        </div>

        <div class="long-input">
          <div class="icon-image">
            <img src="images/home/calendar.svg" alt="" />
          </div>
          <label for="Check-in">Check-out</label>
          <input type="text" placeholder="01/10/2022" />
        </div>

        <div class="rooms">
          <div class="input-three">
            <img src="images/home/down-arrow.svg" alt="" />
            <label for="adult">Adult</label>
            <input type="text" placeholder="2" />
          </div>
          <div class="input-three">
            <img src="images/home/down-arrow.svg" alt="" />
            <label for="adult">Children</label>
            <input type="text" placeholder="0" />
          </div>
          <div class="input-three">
            <img src="images/home/down-arrow.svg" alt="" />
            <label for="adult">Rooms</label>
            <input type="text" placeholder="1" />
          </div>
        </div>
        <div class="message">
          <label for="messages"></label>
          <input type="text" placeholder="message..." />
        </div>
        <div class="button">SUBMIT</div>
      </div>
    </section>
  </div>`;

    var aboutContent = `<div class="about">
    <div class="about-info">
      <div class="underline">
        <h1>About:</h1>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa
        obcaecati eveniet earum optio porro facilis explicabo beatae
        sapiente neque excepturi fugit, nulla quis magni, exercitationem
        debitis quia qui eius minima. Culpa, dolor atque nisi facere fugiat
        cumque aliquam quam quibusdam laborum dolore ab corrupti delectus
        possimus similique laudantium a quisquam voluptatibus impedit
        repellendus minus voluptatem quas necessitatibus ducimus enim. Atque
        cupiditate omnis minus perspiciatis ut molestiae reprehenderit
        expedita consequatur doloribus, temporibus iste quas repellendus
        optio quam esse corporis voluptatem facilis aspernatur explicabo
        maxime iure quasi excepturi. Repellat, necessitatibus tempora!
      </p>
    </div>
    <div class="quote-container">
      <div class="underline">
        <h1>About Quote:</h1>
      </div>
      <div class="about-person">
        <img src="images/about-images/about-client-01.jpg" alt="" />
        <div class="about-quote">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
        <div class="author">
          <p>- Miranda Brown</p>
        </div>
      </div>
      <div class="about-person">
        <img src="images/about-images/about-client-02.jpg" alt="" />
        <div class="about-quote">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
        <div class="author">- Johnathan wes</div>
      </div>
    </div>
  </div>`;

    var specialOffersContent = `<div class="special-offers">
    <div class="offers-header">
      SPECIAL OFFER(S):
      <div class="border"></div>
    </div>
    <div class="offer-container">
      <div class="left">
        <img src="images/special-offer-01.jpg" alt="" />
      </div>
      <div class="right">
        <div class="tour-special">
          barcelona spain
          <div class="border"></div>
        </div>
        <div class="tour-description">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            perspiciatis unde omnis accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div class="button">Learn More</div>
      </div>
    </div>
    <div class="offer-container">
      <div class="left">
        <img src="images/special-offer-02.jpg" alt="" />
      </div>
      <div class="right">
        <div class="tour-special">
          bangkok, thailand
          <div class="border"></div>
        </div>
        <div class="tour-description">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            perspiciatis unde omnis accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div class="button">Learn More</div>
      </div>
    </div>
  </div>`;

    var blogContent = `<div class="blog">
    <!-- -------------------- -->
    <div class="blog-header">
      <h1>BLOG:</h1>
      <!-- <div class="blog-text"></div> -->
      <div class="bottom-border"></div>
    </div>

    <!-- blog-container(date, image, text) -->
    <div class="blog-container">
      <div class="blog-left">
        <div class="date">
          <h1>06</h1>
          <h2>JUN</h2>
        </div>
      </div>
      <div class="blog-right">
        <div class="right-image">
          <img src="images/blog.jpg" alt="" />
        </div>
        <div class="right-header">
          Sed et persipiatis unde omnis iste natus
        </div>
        <div class="right-info">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </div>
      </div>
    </div>
    <div class="blog-container">
      <div class="blog-left">
        <div class="date">
          <h1>23</h1>
          <h2>JUN</h2>
        </div>
      </div>
      <div class="blog-right">
        <div class="right-image">
          <img src="images/blog.jpg" alt="" />
        </div>
        <div class="right-header">
          Sed et persipiatis unde omnis iste natus
        </div>
        <div class="right-info">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </div>
      </div>
    </div>
  </div>`;

    var contactContent = `<div class="contact">
    <div class="contact-header">
      <h1>CONTACT US:</h1>
      <!-- <div class="blog-text"></div> -->
      <div class="bottom-border"></div>
    </div>
    <div class="contact-container">
      <div class="map">
        <div class="map-image">
          <img src="images/contact-map.jpg" alt="" />
        </div>
        <div class="address">
          <p>
            travel-fly Inc.<br />
            8901 Marmora Road,<br />
            Glasgow, D04 89GR. <br />Freephone:+1 800 559 6580
            <br />Telephone:+1 800 603 6035 <br />FAX:+1 800 889 9898
            <br />E-mail: mail@travelfly.org
          </p>
        </div>
      </div>
      <div class="contact-form">
        <input
          class="text-fields"
          type="text"
          name="your-name"
          id="your-name"
          placeholder="Your name..."
        />
        <input
          class="text-fields"
          type="text"
          name="email"
          id="email"
          placeholder="Email Address..."
        />
        <input
          class="text-fields"
          type="text"
          name="company"
          id="company"
          placeholder="Company..."
        />

        <textarea
          name="Message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <div class="button">send message</div>
      </div>
    </div>
  </div>`;

    var toursContent = `
    <div class="tours">
      <div class="header-image picture">
        <div class="callout">
          <h1>Tours:</h1>
        </div>
      </div>

      <div class="tours-container">
        <a id="israel" href="#">
          <div class="tour tour-image">
            <h1>Israel</h1>
            <div class="price">From: $1000</div>
            <div class="learn-more">Learn More</div>
          </div>
        </a>

        <a id="usa" href="#">
          <div class="tour2 tour-image">
            <h1>U.S.A</h1>
            <div class="price">From: $1500</div>
            <div class="learn-more">Learn More</div>
          </div>
        </a>
        <a id="australia" href="#">
          <div class="tour3 tour-image">
            <h1>Australia</h1>
            <div class="price">From: $1800</div>
            <div class="learn-more">Learn More</div>
          </div>
        </a>
        <a id="nz" href="#">
          <div class="tour4 tour-image">
            <h1>New Zealand</h1>
            <div class="price">From: $1200</div>
            <div class="learn-more">Learn More</div>
          </div>
        </a>
        <a id="france" href="#">
          <div class="tour5 tour-image">
            <h1>France</h1>
            <div class="price">From: $2500</div>
            <div class="learn-more">Learn More</div>
          </div>
        </a>
        <a id="egypt" href="#">
          <div class="tour6 tour-image">
            <h1>Egypt</h1>
            <div class="price">From: $900</div>
            <div class="learn-more">Learn More</div>
          </div>
        </a>
        <a id="japan" href="#">
          <div class="tour7 tour-image">
            <h1>Japan</h1>
            <div class="price">From: $1300</div>
            <div class="learn-more">Learn More</div>
          </div>
        </a>
        <a id="canada" href="#">
          <div class="tour8 tour-image">
            <h1>Canada</h1>
            <div class="price">From: $2000</div>
            <div class="learn-more">Learn More</div>
          </div>
        </a>
        <a id="uae" href="#">
          <div class="tour9 tour-image">
            <h1>U.A.E</h1>
            <div class="price">From: $3000</div>
            <div class="learn-more">Learn More</div>
          </div>
        </a>
      </div>
    </div> 
    <script src="app/app-tours.js"></script>`;
    
    var israelContent = `<div class="trip-tour">
    <!-- header image -->
    <div class="tour-header">
      <div class="tour-header1 header-picture">
        <div class="callout">
          <h2>Israel tour package:</h2>
        </div>
        <div class="starting-from">
          <p>STARTING FROM $1000</p>
        </div>
      </div>
    </div>
    <!-- three front images -->
    <div class="tripTour-container israel-container">
      <div class="tripTour">
        <img src="images/tour-israel/israel-tour-01.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-israel/israel-tour-02.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-israel/israel-tour-03.jpg" alt="" />
      </div>
    </div>
    <div class="day-container israel-day">
      <div class="day">
        <div class="underline">
          <h1>Day #1:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #2:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #3:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <a href="#">
        <div class="book-now">BOOK NOW</div>
      </a>
    </div>
  </div>`;

    var usaContent = `<div class="trip-tour">
    <!-- header image -->
    <div class="tour-header">
      <div class="tour-header2 header-picture">
        <div class="callout">
          <h2>U.S.A tour package:</h2>
        </div>
        <div class="starting-from">
          <p>STARTING FROM $1500</p>
        </div>
      </div>
    </div>
    <!-- three front images -->
    <div class="tripTour-container usa-container">
      <div class="tripTour">
        <img src="images/tour-usa/usa-tour-01.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-usa/usa-tour-02.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-usa/usa-tour-03.jpg" alt="" />
      </div>
    </div>
    <div class="day-container usa-day">
      <div class="day">
        <div class="underline">
          <h1>Day #1:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #2:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #3:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <a href="#">
        <div class="book-now">
          <p>BOOK NOW</p>
        </div>
      </a>
    </div>
  </div>`;

    var australiaContent = `<div class="trip-tour">
    <!-- header image -->
    <div class="tour-header">
      <div class="tour-header3 header-picture">
        <div class="callout">
          <h2>Australia tour package:</h2>
        </div>
        <div class="starting-from">
          <p>STARTING FROM $1500</p>
        </div>
      </div>
    </div>
    <!-- three front images -->
    <div class="tripTour-container australia-container">
      <div class="tripTour">
        <img src="images/tour-aus/aus-tour-01.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-aus/aus-tour-02.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-aus/aus-tour-03.jpg" alt="" />
      </div>
    </div>
    <div class="day-container australia-day">
      <div class="day">
        <div class="underline">
          <h1>Day #1:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #2:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #3:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <a href="#">
        <div class="book-now">
          <p>BOOK NOW</p>
        </div>
      </a>
    </div>
  </div>`;

    var nzContent = `<div class="trip-tour">
    <!-- header image -->
    <div class="tour-header">
      <div class="tour-header4 header-picture">
        <div class="callout">
          <h2>New Zealand tour package:</h2>
        </div>
        <div class="starting-from">
          <p>STARTING FROM $1200</p>
        </div>
      </div>
    </div>
    <!-- three front images -->
    <div class="tripTour-container nz-container">
      <div class="tripTour">
        <img src="images/tour-nz/nz-tour-01.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-nz/nz-tour-02.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-nz/nz-tour-03.jpg" alt="" />
      </div>
    </div>
    <div class="day-container nz-day">
      <div class="day">
        <div class="underline">
          <h1>Day #1:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #2:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #3:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <a href="#">
        <div class="book-now">
          <p>BOOK NOW</p>
        </div>
      </a>
    </div>
  </div>`;

    var franceContent = `<div class="trip-tour">
    <!-- header image -->
    <div class="tour-header">
      <div class="tour-header5 header-picture">
        <div class="callout">
          <h2>France tour package:</h2>
        </div>
        <div class="starting-from">
          <p>STARTING FROM $2500</p>
        </div>
      </div>
    </div>
    <!-- three front images -->
    <div class="tripTour-container france-container">
      <div class="tripTour">
        <img src="images/tour-france/france-tour-01.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-france/france-tour-02.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-france/france-tour-03.jpg" alt="" />
      </div>
    </div>
    <div class="day-container france-day">
      <div class="day">
        <div class="underline">
          <h1>Day #1:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #2:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #3:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <a href="#">
        <div class="book-now">
          <p>BOOK NOW</p>
        </div>
      </a>
    </div>
  </div>`;

    var egyptContent = `<div class="trip-tour">
    <!-- header image -->
    <div class="tour-header">
      <div class="tour-header6 header-picture">
        <div class="callout">
          <h2>Egypt tour package:</h2>
        </div>
        <div class="starting-from">
          <p>STARTING FROM $900</p>
        </div>
      </div>
    </div>
    <!-- three front images -->
    <div class="tripTour-container egypt-container">
      <div class="tripTour">
        <img src="images/tour-egypt/egypt-tour-01.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-egypt/egypt-tour-02.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-egypt/egypt-tour-03.jpg" alt="" />
      </div>
    </div>
    <div class="day-container egypt-day">
      <div class="day">
        <div class="underline">
          <h1>Day #1:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #2:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #3:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <a href="#">
        <div class="book-now">
          <p>BOOK NOW</p>
        </div>
      </a>
    </div>
  </div>`;

    var japanContent = `<div class="trip-tour">
    <!-- header image -->
    <div class="tour-header">
      <div class="tour-header7 header-picture">
        <div class="callout">
          <h2>Japan tour package:</h2>
        </div>
        <div class="starting-from">
          <p>STARTING FROM $1300</p>
        </div>
      </div>
    </div>
    <!-- three front images -->
    <div class="tripTour-container japan-container">
      <div class="tripTour">
        <img src="images/tour-japan/japan-tour-01.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-japan/japan-tour-02.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-japan/japan-tour-03.jpg" alt="" />
      </div>
    </div>
    <div class="day-container japan-day">
      <div class="day">
        <div class="underline">
          <h1>Day #1:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #2:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #3:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <a href="#">
        <div class="book-now">
          <p>BOOK NOW</p>
        </div>
      </a>
    </div>
  </div>`;

    var canadaContent = `<div class="trip-tour">
    <!-- header image -->
    <div class="tour-header">
      <div class="tour-header8 header-picture">
        <div class="callout">
          <h2>Canada tour package:</h2>
        </div>
        <div class="starting-from">
          <p>STARTING FROM $2000</p></p>
        </div>
      </div>
    </div>
    <!-- three front images -->
    <div class="tripTour-container canada-container">
      <div class="tripTour">
        <img src="images/tour-canada/canada-tour-01.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-canada/canada-tour-02.jpg" alt="" />          </div>
      <div class="tripTour">
        <img src="images/tour-canada/canada-tour-03.jpg" alt="" />          </div>
    </div>
    <div class="day-container canada-day">
      <div class="day">
        <div class="underline">
          <h1>Day #1:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #2:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #3:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <a href="#">
        <div class="book-now">
          <p>BOOK NOW</p>
        </div>
      </a>
    </div>
  </div>`;

    var uaeContent = `<div class="trip-tour">
    <!-- header image -->
    <div class="tour-header">
      <div class="tour-header9 header-picture">
        <div class="callout">
          <h2>U.E.A tour package:</h2>
        </div>
        <div class="starting-from">
          <p>STARTING FROM $3000</p>
        </div>
      </div>
    </div>
    <!-- three front images -->
    <div class="tripTour-container uae-container">
      <div class="tripTour">
        <img src="images/tour-uae/uae-tour-01.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-uae/uae-tour-02.jpg" alt="" />
      </div>
      <div class="tripTour">
        <img src="images/tour-uae/uae-tour-03.jpg" alt="" />
      </div>
    </div>
    <div class="day-container uae-day">
      <div class="day">
        <div class="underline">
          <h1>Day #1:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #2:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="day">
        <div class="underline">
          <h1>Day #3:</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <a href="#">
        <div class="book-now">
          <p>BOOK NOW</p>
        </div>
      </a>
    </div>
  </div>`;

    var _changePageContent = function(pageName) {
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));

        if(pageName == "home"){
            $("nav").css("border-bottom", "2px solid #fff");
            $("nav a").css("color", "#fff")
            $("nav .logo").html(`<img src="images/logo-white.svg" alt="" />`)
        }
        else {
            $("nav").css("border-bottom", "2px solid #000");
            $("nav a").css("color", "#000")
            $("nav .logo").html(`<img src="images/logo-black.svg" alt="" />`)
        }
    };

        return {
            changePageContent: _changePageContent,
        }
    
})();
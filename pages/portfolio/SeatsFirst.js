import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { CldImage } from 'next-cloudinary';

const Wrapper = styled(PortfolioPageTemplate)``;

const SeatsFirst = () => {
  return (
    <Wrapper>
      <section>
        <h1>SeatsFirst</h1>

        <hr />
        <h2>Problem:</h2>
        <h3>The current flow for buying tickets is too long and confusing.</h3>
        <br />
        <h2>Solution:</h2>
        <h3>
          Create a new flow that allows users to buy tickets in 3 steps or less.
        </h3>
      </section>
      <section>
        <p>
          hello Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <figure>
        <CldImage
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698182054/Portfolio_Images/new-flow-wires-3_h9ey9w.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1796 × 1218
        />
        <figcaption>
          Wireframes of a proposed flow that would show users the seat map for
          each showtime first.
        </figcaption>
      </figure>
      <section>
        <h2>Current Flow</h2>
        <h3>Users select seats and Tickets</h3>
        <p>
          Users select their tickets and their seats separately, which takes
          more steps to complete. Also, the process becomes more complicated
          when a user has discounted tickets.
        </p>
      </section>
      <figure>
        <CldImage
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178500/Portfolio_Images/current-flow_m85dur.png"
          alt="Current flow for buying tickets"
          width={3280}
          height={1246}
          // 3280 × 1246
        />
        <figcaption>
          Currently it takes a lot longer for users to complete the flow.
        </figcaption>
      </figure>
      <hr />
      <section>
        <h2>New flow</h2>
        <h3>Users select seats and Tickets</h3>
        <p>
          By combining these two screens it should make it easier for the user
          to complete the flow.
        </p>
      </section>
      <figure>
        <CldImage
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698177811/Portfolio_Images/newflow_gb1off.png"
          alt="New flow for buying tickets"
          width={2690}
          height={1694}
          // 2536 × 864
        />
        <figcaption>
          The idea is to combine two of the screens, hopefully making the
          process more conscise.
        </figcaption>
      </figure>
      <section>
        <h2>User Testing</h2>
        <h3>I set up three different flows for our testsers</h3>
        <hr />
        <h4>I tested 3 different flows:</h4>
        <ul>
          <li>Current Flow - The same as what we currently have</li>
          <li>
            Seats First - Showing the seat map first and giving the user the
            ability to change showtimes and preview different stadiums before
            choosing tickets.
          </li>
          <li>
            Seats First Accordion - Same as Seats First but with an accordion.
          </li>
        </ul>
      </section>
      <figure>
        <CldImage
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178212/Portfolio_Images/current-flow-ui_e0kpio.png"
          alt="current flow ui"
          width={1840}
          height={1416}
          // 1840 × 1416
        />
        <figcaption>
          This is the current flow, the user chooses their ticket types, then
          their seat and pays for their tickets.
        </figcaption>
      </figure>
      <figure>
        <CldImage
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178210/Portfolio_Images/new-flow_dr7pkf.png"
          alt="current flow ui"
          width={1840}
          height={1416}
          // 1840 × 1416
        />
        <figcaption>
          This is the seats first flow, the user chooses their seat, then their
          ticket type and pays for their tickets.
        </figcaption>
      </figure>
      <figure>
        <CldImage
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178211/Portfolio_Images/new-flow-accordion_cyjxhv.png"
          alt="seats first accordion flow ui"
          width={1840}
          height={1416}
          // 1840 × 1416
        />
        <figcaption>
          This is the seats first accordion flow, it's the same flow, however we
          are using an accordin. The idea was to see if the accordion would
          reduce the time it takes to complete screens.
        </figcaption>
      </figure>

      <section>
        <h2>Results</h2>
        <h3>Users favored Seats First</h3>
        <p>
          Ultimately we found that our users preferred seeing the seatmaps
          first. However, we also found that our users were confused by having
          to select your ticket type after choosing your seat.
        </p>
      </section>
      <figure>
        <CldImage
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178420/Portfolio_Images/summary-responses_tpeklk.png"
          alt="Results leaning towards the new flow"
          width={1840}
          height={1416}
          // 1840 × 1416
        />
      </figure>
      <figure>
        <CldImage
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178373/Portfolio_Images/preferred-flows_i7y2md.png"
          alt="Results leaning towards the new flow"
          width={2158}
          height={1336}
          // 2158 × 1336
        />
      </figure>
    </Wrapper>
  );
};

export default SeatsFirst;

import React from "react";

function Experience() {
  return (
    <div>
      <div className="work">
        <h4 className="font-weight-bold text-center mt-5">My Experiences</h4>
        <div className="row mb-5">
          <div className="col-lg-6 ">
            <p className="h6 font-weight-bold">
              H.E.R DAO 🇳🇬 Lead -{" "}
              <a
                className="secondary-color link"
                href="https://www.her-dao.xyz/"
              >
                H.E.R DAO
              </a>
            </p>
            <small>Nov 2023 - present</small>
          </div>
          <div className="col-lg-6">
            <li>
              Effectively inaugurated the H.E.R DAO in Nigeria, surpassing the
              projected developer onboarding by 20%.
            </li>
            <li>
              Secured a strategic partnership with Cartesi, enhancing the DAO's
              ecosystem and industry presence.
            </li>
            <li>
              Orchestrated a highly successful builder event, exceeding
              attendance expectations by 20% through effective promotions and
              hosting strategies.
            </li>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 ">
            <p className="h6 font-weight-bold">
              Local Rust Community Organizer -{" "}
              <a
                className="secondary-color link"
                href="https://www.meetup.com/rust-meetup-group/"
              >
                Rust Nigeria Meetup Classroom
              </a>
            </p>
            <small>July 2023 - Present</small>
          </div>
          <div className="col-lg-6">
            <li>
              Founded and led a local Rust community initiative, which has grown
              to over 100 passionate members.
            </li>
            <li>
              Organized weekly meetups focused on learning and discussing Rust
              programming language concepts, best practices, and practical
              applications.
            </li>
            <li>
              Developed and implemented a community engagement strategy that
              fostered collaboration, knowledge sharing, and mentorship among
              members.
            </li>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 ">
            <p className="h6 font-weight-bold">
              Lab intern(Rust developer) -{" "}
              <a
                className="secondary-color link"
                href="https://github.com/polytope-labs"
              >
                Polytope labs
              </a>
            </p>
            <small>April 2023 - Jan 2024</small>
          </div>
          <div className="col-lg-6">
            <li>
              Collaborating with team members in developing docs for Simnode.
              Simnode is a Testing library for simulating environments that
              would be similar to when a parachain is deployed live.
            </li>
            <li>
              Published an article on testing{" "}
              <a
                className="secondary-color"
                href="https://blog.polytope.technology/testing-solidity-contracts-with-rust"
              >
                solidity smart contracts in Rust
              </a>
            </li>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 ">
            <p className="h6 font-weight-bold">
              Blockchain Engineer student grad -{" "}
              <a
                className="secondary-color link"
                href="https://www.polkadot.network/development/academy/"
              >
                Polkadot Blockchain academy
              </a>
            </p>
            <small>Feb 2022 - Dec 2022</small>
          </div>
          <div className="col-lg-6">
            <li>
              Wrote a custom pallet using FRAMEs — Delegated Proof of Stake,
              which is a similar system to Nominated Proof of Stake
            </li>
            <li>
              Relay to Parachains communications using cumulus and Zombienet.
            </li>
            <li>
              Constructed custom XCM messages and formats to the relay chain and
              connected them with pallets. Wrote smart contracts for minting
              NFTs using Ink!
            </li>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 ">
            <p className="h6 font-weight-bold">
              Technical Writer -{" "}
              <a className="secondary-color link" href="https://draft.dev/">
                Draft.dev
              </a>
            </p>
            <small>Feb 2022 - Dec 2022</small>
          </div>
          <div className="col-lg-6">
            <li>
              {" "}
              Wrote technical blog posts on niche topics in software
              development.
            </li>
            <li>
              {" "}
              Contributed to developing docs for Foxit PDF SDK. Wrote a tutorial
              on integrating the SDK into a Full-stack project using
              DigitalOcean.{" "}
            </li>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 ">
            <p className="h6 font-weight-bold">
              Lead Frontend developer -{" "}
              <a className="secondary-color" href="https://monieworx.com/">
                Monieworx
              </a>
            </p>
            <small>Feb 2022 - Dec 2022</small>
          </div>
          <div className="col-lg-6">
            <li>
              {" "}
              Led my team as lead front-end engineer.{" "}
              <p>
                We worked on a forum application: features included creating
                posts, comments, goals, categories, upvotes and downvotes,
                usernames, avatars, etc.
              </p>
            </li>
            <li> Developed a fintech application with KYC features. </li>
            <li>
              {" "}
              Collaborated with the product manager to revamp the forum
              application.
            </li>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 ">
            <p className="h6 font-weight-bold">
              Frontend Engineer -{" "}
              <a className="secondary-color" href="https://onebmac.com/">
                Ikooba technologies(BMAC solutions){" "}
              </a>
            </p>
            <small>Sep 2020 - Feb 2022</small>
          </div>
          <div className="col-lg-6">
            <li> Building a new project from scratch with team members.</li>
            <li> Built reusable code and components for future use. </li>
            <li> Implemented new features.</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

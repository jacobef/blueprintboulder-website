import React from "react";
import { Layout, Seo } from "components/common";
import { Intro, Skills, Contact, Projects } from "components/landing";
import { People } from "components/landing/People";

const Home = () => (
	<Layout>
		<Seo />
		<Intro />
		<Projects />
		<Skills />
		<People />
		<Contact />
	</Layout>
);
export default Home;
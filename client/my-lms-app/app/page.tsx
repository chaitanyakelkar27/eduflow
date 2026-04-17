import { CategoryChips } from "../components/home/CategoryChips";
import { CourseListSection } from "../components/home/CourseListSection";
import { FeaturedSection } from "../components/home/FeaturedSection";
import { Footer } from "../components/home/Footer";
import { Hero } from "../components/home/Hero";
import { Navbar } from "../components/home/Navbar";
import { Testimonials } from "../components/home/Testimonials";
import { homeContent } from "../lib/home-content";

export default function Home() {
  return (
    <div className="pb-4">
      <Navbar {...homeContent.navbar} />
      <Hero {...homeContent.hero} />
      <CategoryChips categories={homeContent.categories} />
      <FeaturedSection {...homeContent.featuredSection} />
      <CourseListSection {...homeContent.courseListSection} />
      <Testimonials {...homeContent.testimonials} />
      <Footer {...homeContent.footer} />
    </div>
  );
}

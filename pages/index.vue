<template>
  <main id="app">
    <section class="cards">
      <div class="resume-header">
        <div class="experience-title-div">
          <h1 class="experience-title">Work Experience</h1>
        </div>
        <div class="button-div">
          <a href="#" class="button">Download Resume</a>
        </div>
      </div>
      <ExperienceCard
        v-for="experience in experiences"
        :key="experience.id"
        :experience="experience"
      />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          id: "1",
          title: "Software Developer II",
          company: "Intact",
          location: "Montreal, QC",
          from: "08-2020",
          to: "Present",
          descriptions: [
            {
              id: "1",
              text: "Gathered and defined customer requirements to develop clear specifications for project plans",
            },
            {
              id: "2",
              text: "Introduced a Feature flag management system, greatly reducing the time spent during deployments",
            },
          ],
        },
        {
          id: "2",
          title: "Junior Software Developer",
          company: "Equisoft",
          location: "Montreal, QC",
          from: "09-2019",
          to: "08-2020",
          descriptions: [
            {
              id: "1",
              text: "Boosted the Equisoft Manage competitiveness by pioneering GIT as a source control management tool with OIPA",
            },
            {
              id: "2",
              text: "Implemented a new file system to go along with GIT",
            },
          ],
        },
      ],
    };
  },
};
</script>
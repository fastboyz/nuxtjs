<template>
    <div class="card">
        <div class="card-header">
        <slot name="header">
            <h3 class="experience-date">{{ experience.from }}  -  {{ experience.to}}</h3>
        </slot>
        </div>
        <div class="card-body">
        <slot>
            <h5 class="job-title">{{ experience.title }}</h5>
            <p class="company-location">{{experience.company}}, {{ experience.location }}</p>
            <ul class="experience-list">
                <li class = "experience-item" v-for="description in experience.descriptions"
                :key="description.id">{{ description.text }}</li>
            </ul>
        </slot>
        </div>
    </div>
</template>

<script src="./ExperienceCard.js"/>
<style src="./ExperienceCard.scss" lang="scss" scoped/>
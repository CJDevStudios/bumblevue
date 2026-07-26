<script setup>
import { ref } from 'vue';
const verticalTabs = ref(Array.from({ length: 10 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content`, value: `${i}` })));

const code = {
    basic: `
        <Tabs value="0" orientation="vertical">
            <TabList>
                <Tab v-for="tab in verticalTabs" :key="tab.title" :value="tab.value">
                    {{ tab.title }}
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in verticalTabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    `, content: \`Tab \${i + 1} Content\`, value: \`\${i}\` }))
        };
    }
};
<\/script>
`,
    composition: `
<template>
    <div class="card">
        <Tabs value="0" orientation="vertical">
            <TabList>
                <Tab v-for="tab in verticalTabs" :key="tab.title" :value="tab.value">
                    {{ tab.title }}
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in verticalTabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const verticalTabs = ref(Array.from({ length: 10 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\`, value: \`\${i}\` })));
<\/script>
`
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Adding <i>orientation</i> property with the "vertical" value displays the tabs list vertically instead of horizontally.</p>
    </DocSectionText>
    <div class="card">
        <Tabs value="0" orientation="vertical">
            <TabList>
                <Tab v-for="tab in verticalTabs" :key="tab.title" :value="tab.value">
                    {{ tab.title }}
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in verticalTabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
    <DocSectionCode :code="code" />
</template>

<style scoped></style>

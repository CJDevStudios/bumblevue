import { Theme, ThemeService } from '@cjdevstudios/bumbleuix-styled';
import { mergeKeys } from '@cjdevstudios/bumbleuix-utils';
import { FilterMatchMode } from '@cjdevstudios/bumblevue-core/api';
import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';
import BumbleVueService from '@cjdevstudios/bumblevue-core/service';
import { inject, reactive, ref, watch } from 'vue';

export const defaultOptions = {
    ripple: false,
    inputStyle: null,
    inputVariant: null,
    locale: {
        startsWith: 'Starts with',
        contains: 'Contains',
        notContains: 'Not contains',
        endsWith: 'Ends with',
        equals: 'Equals',
        notEquals: 'Not equals',
        noFilter: 'No Filter',
        lt: 'Less than',
        lte: 'Less than or equal to',
        gt: 'Greater than',
        gte: 'Greater than or equal to',
        dateIs: 'Date is',
        dateIsNot: 'Date is not',
        dateBefore: 'Date is before',
        dateAfter: 'Date is after',
        clear: 'Clear',
        apply: 'Apply',
        matchAll: 'Match All',
        matchAny: 'Match Any',
        addRule: 'Add Rule',
        removeRule: 'Remove Rule',
        accept: 'Yes',
        reject: 'No',
        choose: 'Choose',
        upload: 'Upload',
        cancel: 'Cancel',
        completed: 'Completed',
        pending: 'Pending',
        fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        chooseYear: 'Choose Year',
        chooseMonth: 'Choose Month',
        chooseDate: 'Choose Date',
        prevDecade: 'Previous Decade',
        nextDecade: 'Next Decade',
        prevYear: 'Previous Year',
        nextYear: 'Next Year',
        prevMonth: 'Previous Month',
        nextMonth: 'Next Month',
        prevHour: 'Previous Hour',
        nextHour: 'Next Hour',
        prevMinute: 'Previous Minute',
        nextMinute: 'Next Minute',
        prevSecond: 'Previous Second',
        nextSecond: 'Next Second',
        am: 'am',
        pm: 'pm',
        today: 'Today',
        weekHeader: 'Wk',
        firstDayOfWeek: 0,
        showMonthAfterYear: false,
        dateFormat: 'mm/dd/yy',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        passwordPrompt: 'Enter a password',
        emptyFilterMessage: 'No results found',
        searchMessage: '{0} results are available',
        selectionMessage: '{0} items selected',
        emptySelectionMessage: 'No selected item',
        emptySearchMessage: 'No results found',
        fileChosenMessage: '{0} files',
        noFileChosenMessage: 'No file chosen',
        emptyMessage: 'No available options',
        aria: {
            trueLabel: 'True',
            falseLabel: 'False',
            nullLabel: 'Not Selected',
            star: '1 star',
            stars: '{star} stars',
            selectAll: 'All items selected',
            unselectAll: 'All items unselected',
            close: 'Close',
            previous: 'Previous',
            next: 'Next',
            navigation: 'Navigation',
            scrollTop: 'Scroll Top',
            moveTop: 'Move Top',
            moveUp: 'Move Up',
            moveDown: 'Move Down',
            moveBottom: 'Move Bottom',
            moveToTarget: 'Move to Target',
            moveToSource: 'Move to Source',
            moveAllToTarget: 'Move All to Target',
            moveAllToSource: 'Move All to Source',
            pageLabel: 'Page {page}',
            firstPageLabel: 'First Page',
            lastPageLabel: 'Last Page',
            nextPageLabel: 'Next Page',
            prevPageLabel: 'Previous Page',
            rowsPerPageLabel: 'Rows per page',
            jumpToPageDropdownLabel: 'Jump to Page Dropdown',
            jumpToPageInputLabel: 'Jump to Page Input',
            selectRow: 'Row Selected',
            unselectRow: 'Row Unselected',
            expandRow: 'Row Expanded',
            collapseRow: 'Row Collapsed',
            showFilterMenu: 'Show Filter Menu',
            hideFilterMenu: 'Hide Filter Menu',
            filterOperator: 'Filter Operator',
            filterConstraint: 'Filter Constraint',
            editRow: 'Row Edit',
            saveEdit: 'Save Edit',
            cancelEdit: 'Cancel Edit',
            listView: 'List View',
            gridView: 'Grid View',
            slide: 'Slide',
            slideNumber: '{slideNumber}',
            zoomImage: 'Zoom Image',
            zoomIn: 'Zoom In',
            zoomOut: 'Zoom Out',
            rotateRight: 'Rotate Right',
            rotateLeft: 'Rotate Left',
            listLabel: 'Option List'
        }
    },
    filterMatchModeOptions: {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    },
    zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
    },
    theme: undefined,
    unstyled: false,
    pt: undefined,
    ptOptions: {
        mergeSections: true,
        mergeProps: false
    },
    csp: {
        nonce: undefined
    }
};

const BumbleVueSymbol = Symbol();

export function useBumbleVue() {
    const BumbleVue = inject(BumbleVueSymbol);

    if (!BumbleVue) {
        throw new Error('BumbleVue is not installed!');
    }

    return BumbleVue;
}

export function setup(app, options) {
    const BumbleVue = {
        config: reactive(options)
    };

    app.config.globalProperties.$bumblevue = BumbleVue;
    app.provide(BumbleVueSymbol, BumbleVue);

    clearConfig();
    setupConfig(app, BumbleVue);

    return BumbleVue;
}

let stopWatchers = [];

export function clearConfig() {
    ThemeService.clear();

    stopWatchers.forEach((fn) => fn?.());
    stopWatchers = [];
}

export function setupConfig(app, BumbleVue) {
    const isThemeChanged = ref(false);

    /*** Methods and Services ***/
    const loadCommonTheme = () => {
        if (BumbleVue.config?.theme === 'none') return;

        // common
        if (!Theme.isStyleNameLoaded('common')) {
            const { primitive, semantic, global, style } = BaseStyle.getCommonTheme?.() || {};
            const styleOptions = { nonce: BumbleVue.config?.csp?.nonce };

            BaseStyle.load(primitive?.css, { name: 'primitive-variables', ...styleOptions });
            BaseStyle.load(semantic?.css, { name: 'semantic-variables', ...styleOptions });
            BaseStyle.load(global?.css, { name: 'global-variables', ...styleOptions });
            BaseStyle.loadStyle({ name: 'global-style', ...styleOptions }, style);

            Theme.setLoadedStyleName('common');
        }
    };

    ThemeService.on('theme:change', function (newTheme) {
        if (!isThemeChanged.value) {
            app.config.globalProperties.$bumblevue.config.theme = newTheme;
            isThemeChanged.value = true;
        }
    });

    /*** Watchers ***/
    const stopConfigWatcher = watch(
        BumbleVue.config,
        (newValue, oldValue) => {
            BumbleVueService.emit('config:change', { newValue, oldValue });
        },
        { immediate: true, deep: true }
    );

    const stopRippleWatcher = watch(
        () => BumbleVue.config.ripple,
        (newValue, oldValue) => {
            BumbleVueService.emit('config:ripple:change', { newValue, oldValue });
        },
        { immediate: true, deep: true }
    );

    const stopThemeWatcher = watch(
        () => BumbleVue.config.theme,
        (newValue, oldValue) => {
            if (!isThemeChanged.value) {
                Theme.setTheme(newValue);
            }

            if (!BumbleVue.config.unstyled) {
                loadCommonTheme();
            }

            isThemeChanged.value = false;
            BumbleVueService.emit('config:theme:change', { newValue, oldValue });
        },
        { immediate: true, deep: false }
    );

    const stopUnstyledWatcher = watch(
        () => BumbleVue.config.unstyled,
        (newValue, oldValue) => {
            if (!newValue && BumbleVue.config.theme) {
                loadCommonTheme();
            }

            BumbleVueService.emit('config:unstyled:change', { newValue, oldValue });
        },
        { immediate: true, deep: true }
    );

    stopWatchers.push(stopConfigWatcher);
    stopWatchers.push(stopRippleWatcher);
    stopWatchers.push(stopThemeWatcher);
    stopWatchers.push(stopUnstyledWatcher);
}

export default {
    install: (app, options) => {
        const configOptions = mergeKeys(defaultOptions, options);

        setup(app, configOptions);
    }
};

#include <stdbool.h>
#include <stdlib.h>
#include <stdint.h>
#include "javascript_provider_service.h"

static void (*jsExpiredTabsWatcher)(void);

static void (*jsClearInterval)(void);

static void (*jsChromeTabsDiscard)(uint32_t);

static void (*jsConsoleLog)(uint32_t);

static void initialize(
        void (*fJsExpiredTabsWatcher)(void),
        void (*fJsClearInterval)(void),
        void (*fJsChromeTabsDiscard)(uint32_t),
        void (*fJsConsoleLog)(uint32_t)) {
    jsExpiredTabsWatcher = fJsExpiredTabsWatcher;
    jsClearInterval = fJsClearInterval;
    jsChromeTabsDiscard = fJsChromeTabsDiscard;
    jsConsoleLog = fJsConsoleLog;
}

static void expiredTabsWatcher() {
    (*jsExpiredTabsWatcher)();
}

static void clearInterval() {
    (*jsClearInterval)();
}

static void chromeTabsDiscard(uint32_t tabId) {
    (*jsChromeTabsDiscard)(tabId);
}

static void consoleLog(uint32_t number) {
    (*jsConsoleLog)(number);
}

javascript_provider_service_namespace const JavaScriptProviderService = {
        initialize,
        expiredTabsWatcher,
        clearInterval,
        chromeTabsDiscard,
        consoleLog
};
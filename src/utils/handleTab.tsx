type Props = {
    title: string
    tabs: any
    setFilter: any
}
export const handleTab = (props: Props) => {
    const { title, tabs, setFilter } = props
    let newTab:any = []
    tabs.forEach((tab:any) => {
        if (tab.title === title) {
            let v = { ...tab, state: true }
            newTab.push(v)
            setFilter(tab.value)
            return v;
        }
        else {
            let v = { ...tab, state: false }
            newTab.push(v)
            return v;
        }

    });

    // setTabs(newTab)

}
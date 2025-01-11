import { useMemo, useState } from "react"
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

interface ISelectOption {
  id: string | number
  label: string
  value: string
}

type Props<T extends ISelectOption> = {
  data: T[]
  label?: string
  placeholder?: string
  onSelect: (value: string) => void
}

export const SelectInput = <T extends ISelectOption>({ data, label, placeholder, onSelect }: Props<T>) => {
  const [openList, setOpenList] = useState(false)
  const [search, setSearch] = useState("")

  const handleSelect = (value: string) => {
    const item = data.find(item => item.value === value)
    setSearch(item?.label || "")
    onSelect(value)
    setTimeout(() => setOpenList(false), 100)
  }

  const handleSearch = (text: string) => {
    setSearch(text)
  }

  const filteredList = useMemo(() => {
    return data.filter(item => item.label.toLowerCase().includes(search.toLowerCase()))
  }, [data, search])

  return (
    <View style={styles.container}>
      {
        label && <Text style={styles.label}>{label}</Text>
      }
      <TextInput
        placeholder={placeholder}
        value={search}
        onFocus={() => setOpenList(true)}
        onChangeText={handleSearch}
        style={styles.input}
      />
      {
        openList && (
          <FlatList
            data={filteredList}
            keyExtractor={item => item.id as string}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleSelect(item.value)} style={styles.listItem}>
                <Text>{item.label}</Text>
              </Pressable>
            )}
            style={styles.listContainer}
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  label: {
    marginBottom: 4,
    fontWeight: "600",
    fontSize: 18,
  },
  input: {
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    fontWeight: "normal",
    fontSize: 16,
  },
  listContainer: {
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 100,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  }
})